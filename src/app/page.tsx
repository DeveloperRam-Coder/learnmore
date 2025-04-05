'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle, Circle, Clock, XCircle } from 'lucide-react';
import { useState } from 'react';

const programmingLanguages = [
  { 
    id: 'HTML-001',
    name: "HTML", 
    path: "/learn/html", 
    color: "bg-orange-500", 
    status: 'Todo',
    description: "Learn the fundamentals of HTML document structure, elements, and semantic markup."
  },
  { 
    id: 'CSS-001',
    name: "CSS", 
    path: "/learn/css", 
    color: "bg-blue-500", 
    status: 'In Progress',
    description: "Master CSS styling, layouts, animations, and responsive design techniques."
  },
  { 
    id: 'JS-001',
    name: "JavaScript", 
    path: "/learn/javascript", 
    color: "bg-yellow-400", 
    status: 'Backlog',
    description: "Explore JavaScript programming concepts, DOM manipulation, and modern ES6+ features."
  },
  { 
    id: 'PY-001',
    name: "Python", 
    path: "/learn/python", 
    color: "bg-green-500", 
    status: 'In Progress',
    description: "Discover Python programming from basics to advanced topics like data analysis and web development."
  },
  { 
    id: 'JAVA-001',
    name: "Java", 
    path: "/learn/java", 
    color: "bg-red-500", 
    status: 'Done',
    description: "Learn object-oriented programming with Java, including classes, inheritance, and application development."
  },
  { 
    id: 'RUBY-001',
    name: "Ruby", 
    path: "/learn/ruby", 
    color: "bg-pink-500", 
    status: 'Canceled',
    description: "Explore Ruby's elegant syntax, object-oriented features, and web development with Rails."
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLanguages = programmingLanguages.filter(lang =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lang.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'In Progress':
        return <Clock className="text-blue-500" size={16} />;
      case 'Done':
        return <CheckCircle className="text-green-500" size={16} />;
      case 'Canceled':
        return <XCircle className="text-red-500" size={16} />;
      default:
        return <Circle className="text-slate-400" size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-4 text-center">
          Start Learning Your Favorite Language 🚀
        </h1>
        <p className="text-slate-600 text-center text-lg mb-8 max-w-2xl mx-auto">
          Choose from our selection of programming languages and start your coding journey today.
        </p>

        <div className="mb-10 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search languages..."
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredLanguages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLanguages.map((lang) => (
              <Card key={lang.id} className="border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${lang.color} rounded-full flex items-center justify-center text-white text-xl font-bold mr-4`}>
                      {lang.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm">
                        {getStatusIcon(lang.status)}
                        <span className="text-slate-500">{lang.status}</span>
                      </div>
                      <h2 className="text-xl font-semibold text-slate-800">{lang.name}</h2>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm flex-grow">{lang.description}</p>

                  <Link href={lang.path} className="mt-4 block">
                    <Button className={`${lang.color} w-full text-white`}>
                      Learn {lang.name}
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-500 py-10">
            No languages found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
