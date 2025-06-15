import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Index() {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Total Articles : 25</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="border-t">
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
