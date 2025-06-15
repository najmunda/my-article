"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
 
const formSchema = z.object({
  username: z.string().nonempty({ message: "Username field cannot be empty" }),
  password: z.string().nonempty({ message: "Password field cannot be empty" }),
})

export function LoginForm({
  className,
  ...props
}) {
 
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [ isPasswordShown, setIsPasswordShown ] = useState(false);

  function onPasswordButtonClick() {
    setIsPasswordShown(isPasswordShown ? false : true);
  }

  function onSubmit(values) {
    console.log(values);
  } 

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
        <div className="grid gap-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="grid gap-1">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input id="username" type="text" placeholder="Input username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>  
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="grid gap-1">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative flex items-center">
                    <Input 
                      id="password"
                      type={isPasswordShown ? "text" : "password"}
                      placeholder="Input password"
                      {...field}
                    />
                    <button type="button" onClick={onPasswordButtonClick} className="pr-3 absolute right-0">
                      {isPasswordShown ? 
                        <Eye size={16} className="stroke-muted-foreground" /> : <EyeOff size={16} className="stroke-muted-foreground" />
                      }
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>  
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
}
