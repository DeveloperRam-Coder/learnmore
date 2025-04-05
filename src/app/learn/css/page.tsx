import { Button } from "@/components/ui/button";
import Link from "next/link";
import TaskList from "@/components/TaskList";
import { cssTags } from "@/data/htmlTags";

export default function CSSPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="outline" className="mb-8" size="sm">
          ← Back to Home
        </Button>
      </Link>
      
      <TaskList 
              tasks={cssTags}
              title="Welcome back!"
              description="Here's a list of your tasks for this month!" category={""}      />
    </div>
  );
}