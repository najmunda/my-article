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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
 
const formSchema = z.object({
  username: z.string()
    .nonempty({ message: "Username field cannot be empty" })
    .regex(/^\w+$/, { message: "Username must be only consist of alphabet, number, or underscore" }),
  password: z.string()
    .nonempty({ message: "Password field cannot be empty" })
    .min(8, { message: "Password must be at least 8 characters" }),
  role: z.enum(["user", "admin"], { message: "Role field cannot be empty" }),
})

export function RegisterForm({
  className,
  ...props
}) {
 
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      role: "",
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
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="grid gap-1">
                <FormLabel>Role</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>  
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
    </Form>
  );
}
