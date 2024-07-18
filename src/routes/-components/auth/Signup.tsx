import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/stores/useAuth";

import LoginDialouge from "./loginDialouge";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAccessToken, setAuthenticated, allUsers, setAllUsers } = useAuth();

  async function onSubmit() {
    try {
      if (allUsers.includes(userName)) {
        return toast.error("User already exists");
      }
      // TODO: Add login logic
      setAccessToken(userName + "-" + password);
      setAuthenticated(true);
      setAllUsers([...allUsers, userName]);
      toast.success("Signup successful");
    } catch (error) {
      console.log(error);
    } finally {
      setShow(false);
    }
  }

  const [show, setShow] = useState(false);

  return (
    <div>
      <Dialog open={show} onOpenChange={setShow}>
        <DialogTrigger>Signup</DialogTrigger>
        <DialogContent className="h-96">
          <p className="text-2xl font-bold text-center my-5">
            Welcome to Health.
          </p>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            className="w-full space-y-5"
          >
            <Input
              placeholder="Enter your email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              label="User Email"
            />
            <Input
              placeholder="Enter your password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="w-full mt-6">Submit</Button>
            <p className="flex items-center gap-x-3 text-center m-auto">
              have an account?{" "}
              <span className="cursor-pointer text-purple-600">
                <LoginDialouge />
              </span>{" "}
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
