import { BookOpen, Pen, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Pen className="mr-2" /> Medium
          </h1>
          <nav>
            <Button variant="ghost" asChild className="mr-2">
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to Medium
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Button size="lg" asChild className="mr-4">
              <Link to="/signup">Start Writing</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/blogs">Explore Topics</Link>
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2" />
                  Read Great Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access a vast library of articles on various topics, written
                  by experts and enthusiasts alike.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Pen className="mr-2" />
                  Write and Share
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Share your thoughts, experiences, and expertise with a global
                  audience of readers.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2" />
                  Connect with Others
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Engage with other writers and readers through comments, likes,
                  and follows.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900">
            Why Choose Medium?
          </h3>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Sparkles className="mx-auto h-12 w-12 text-primary" />
              <h4 className="mt-5 text-lg font-medium text-gray-900">
                High-Quality Content
              </h4>
              <p className="mt-2 text-base text-gray-500">
                Curated articles from top writers and thinkers.
              </p>
            </div>
            <div>
              <Users className="mx-auto h-12 w-12 text-primary" />
              <h4 className="mt-5 text-lg font-medium text-gray-900">
                Engaged Community
              </h4>
              <p className="mt-2 text-base text-gray-500">
                Connect with like-minded readers and writers.
              </p>
            </div>
            <div>
              <Pen className="mx-auto h-12 w-12 text-primary" />
              <h4 className="mt-5 text-lg font-medium text-gray-900">
                Easy Publishing
              </h4>
              <p className="mt-2 text-base text-gray-500">
                User-friendly tools to help you start writing immediately.
              </p>
            </div>
            <div>
              <BookOpen className="mx-auto h-12 w-12 text-primary" />
              <h4 className="mt-5 text-lg font-medium text-gray-900">
                Diverse Topics
              </h4>
              <p className="mt-2 text-base text-gray-500">
                Explore a wide range of subjects and interests.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-400">
            © 2023 Medium. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
