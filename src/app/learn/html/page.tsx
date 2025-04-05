import { Button } from "@/components/ui/button";
import Link from "next/link";
import TaskList from "@/components/TaskList";
import { htmlTags } from "@/data/htmlTags";

export default function HTMLPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="outline" className="mb-8" size="sm">
          ← Back to Home
        </Button>
      </Link>
      
      <TaskList 
        tasks={htmlTags} 
        title="HTML Tutorial - Beginner to Advanced" 
        description="A comprehensive guide to HTML elements, attributes, and best practices. Work through these tasks to master HTML from basic document structure to advanced features."
        category="html"
      />
    </div>
  );
}