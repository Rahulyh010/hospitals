import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/stores/useAuth";

import Signup from "./Signup";

export default function LoginDialouge() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthenticated, accessToken, allUsers } = useAuth();
  const [show, setShow] = useState(false);

  async function onSubmit() {
    try {
      if (!allUsers.includes(userName)) {
        return toast.error("User Does not exist");
      }
      // TODO: Add login logic
      if (userName + "-" + password !== accessToken) {
        toast.error("Invalid credentials");
        return;
      } else {
        setAuthenticated(true);
        toast.success("Login successful");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setShow(false);
    }
  }

  return (
    <div>
      <Dialog open={show} onOpenChange={setShow}>
        <DialogTrigger>Login</DialogTrigger>
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
            <p className="text-center">
              Don't have an account?{" "}
              <span className="cursor-pointer text-purple-600">
                <Signup />
              </span>{" "}
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
