
import { Link } from "react-router-dom";
import { UserPlus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Student Team Members Management
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Easily manage your team members, add new students, and keep track of everyone's details in one place.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mt-8">
        <Link to="/add" className="w-full">
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex flex-col items-center justify-center p-8">
              <UserPlus className="h-16 w-16 text-team-blue mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800">Add New Member</h2>
              <p className="text-gray-600 mt-2 text-center">
                Create a new team member profile with all their details
              </p>
              <Button className="mt-6 bg-team-blue hover:bg-blue-600">
                Add Member
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/members" className="w-full">
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex flex-col items-center justify-center p-8">
              <Users className="h-16 w-16 text-team-blue mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800">View All Members</h2>
              <p className="text-gray-600 mt-2 text-center">
                Browse through the complete list of team members
              </p>
              <Button className="mt-6 bg-team-blue hover:bg-blue-600">
                View Members
              </Button>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Index;
