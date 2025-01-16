"use client";


import { Tabs, Tab, Input, Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";

export default function App() {
  // Define tab items
  const tabs = [
    {
      id: "sign-in",
      label: "Sign In",
      content: (
        <form
        action={async () => {
     
          await signIn()
        }}
      >
        <div className="flex flex-col gap-4 p-4">
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            required
            className="w-[430px]"
          />
          <Button color="primary" size="lg" type="submit">
            Continue
          </Button>
        </div>
      </form>
        
      ),
    },
    {
      id: "sign-up",
      label: "Sign Up",
      content: (
        <div className="flex flex-col gap-4 p-4">
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            required
             className="w-[430px]"
          />
          <Button color="primary" size="lg">
            Continue
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <Tabs
        aria-label="Authentication tabs"
        items={tabs}
        className=" rounded-lg"
        variant="bordered"  
        
      >
        {(item) => (
          <Tab
            key={item.id}
            title={item.label}
            className=" font-medium px-20"
          >
            {item.content}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
