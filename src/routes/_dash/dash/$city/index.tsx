import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useParams, useRouter } from "@tanstack/react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import AlertLoader from "@/components/global/AlertLoader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/lib/stores/useAuth";
import { useSettings } from "@/lib/stores/useSettings";
import { cn } from "@/lib/utils";
import { THospitals } from "@/types/THospitals";

export const Route = createFileRoute("/_dash/dash/$city/")({
  component: Results,
});

function Results() {
  const { city } = useParams({ from: "/_dash/dash/$city/" });
  const [hospitals, setHospitals] = useState<THospitals>([]);
  const router = useRouter();
  const { theme } = useSettings();
  const { authenticated } = useAuth();

  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: `hospital in ${city}`,
            format: "json",
            addressdetails: 1,
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      setHospitals(data);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
      toast.error("Error fetching data");
    },
  });

  useEffect(() => {
    mutate();
  }, [city]);

  if (isPending) {
    return (
      <div>
        <AlertLoader open />
      </div>
    );
  }
  return (
    <div className="space-y-5 px-5">
      <div
        className="text-xl font-bold cursor-pointer"
        onClick={() => router.history.back()}
      >
        Back
      </div>
      <div>
        <p className="text-2xl text-center mb-5">
          Search Results for{" "}
          <span className="underline text-purple-500">{city}</span>
        </p>
      </div>
      {hospitals &&
        hospitals.map((hospital, index) => (
          <div
            className={cn(
              "w-full bg-card shadow-lg flex items-center  gap-x-4 p-2",
              theme == "dark" && "border"
            )}
          >
            <div key={index} className="">
              <img
                src="https://media.istockphoto.com/id/1344779917/vector/medical-center-hospital-building-vector-design.jpg?s=612x612&w=0&k=20&c=_sZByueZhEZbK2WjQz1jqXy1_Rr5jYkgiVBj-2ls44s="
                alt=""
                className="w-32 h-32"
              />
            </div>
            <div className="w-full">
              <p>{hospital.display_name}</p>
              <p>{hospital.name}</p>
              <p>
                {hospital.lat}, {hospital.lon}
              </p>
              <p>{hospital.address.country}</p>
              <div className="w-full flex justify-end">
                <Dialog>
                  <DialogTrigger>
                    {" "}
                    <Button>Book Appointment</Button>
                  </DialogTrigger>
                  <DialogContent>
                    {!authenticated ? (
                      <DialogHeader>
                        <DialogTitle>UnAuthorized</DialogTitle>
                        <DialogDescription>
                          Kindly Login Please to Procced
                        </DialogDescription>
                      </DialogHeader>
                    ) : (
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </DialogDescription>
                      </DialogHeader>
                    )}

                    <DialogClose>
                      <Button>Confirm</Button>
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
