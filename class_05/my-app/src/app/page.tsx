import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className=" flex min-h-56 justify-center items-baseline   bg-gray-300">
      <Button variant="outline" className="bg-red-500">
        Button
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>
          <Button>Button</Button>
          <Button>Button</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
