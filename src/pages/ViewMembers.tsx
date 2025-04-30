
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Users, Search, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import api, { Member } from "../services/api";

const ViewMembers = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample member data for demo purposes
  const sampleMembers: Member[] = [
    {
      _id: "1",
      name: "ANSH HOSABETTU (RA2211056010084)",
      role: "ENGINEER",
      email: "ah1715@srmist.edu.in",
      phone: "+919689660415",
      image: "/images/ansh.jpg", 
      department: "DSBS",
      joinDate: "2025-04-30",
      skills: ["React", "TypeScript", "CSS", "HTML", "JavaScript"]
    },
    {
      _id: "2",
      name: "SOUMYAPRIYO KUNDU (RA2211056010117)",
      role: "ENGINEER",
      email: "sk3430@srmist.edu.in",
      phone: "+918900754455",
      image: "/images/soumyapriyo.jpeg", 
      department: "DSBS",
      joinDate: "2025-04-30",
      skills: ["Node.js", "Express", "MongoDB", "API Design", "AWS"]
    },
    {
      _id: "3",
      name: "HARISH B (RA2211056010099)",
      role: "ENGINEER",
      email: "hb1651@srmist.edu.in",
      phone: "+918870693131",
      image: "/images/harish.png", 
      department: "DSBS",
      joinDate: "2025-04-30",
      skills: ["Figma", "Adobe XD", "Wireframing", "User Research", "Prototyping"]
    }
  ];

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // In a real application, we would fetch data from the API:
        // const data = await api.getMembers();
        // setMembers(data);
        
        // For demo purposes, we'll use sample data after a short delay
        setTimeout(() => {
          setMembers(sampleMembers);
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching members:", error);
        setIsLoading(false);
      }
    };
    
    fetchMembers();
  }, []);
  
  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Card>
        <CardHeader className="bg-team-blue text-white">
          <CardTitle className="flex items-center text-2xl">
            <Users className="mr-2 h-6 w-6" />
            Team Members
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search by name, role, or email..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center py-10">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-10 w-10 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-4 w-48 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 w-32 bg-gray-200 rounded"></div>
              </div>
            </div>
          ) : filteredMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member) => (
                <Card key={member._id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] relative bg-gray-100">
                    <img 
                      src={member.image || "/placeholder.svg"} 
                      alt={`${member.name}'s profile`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                    <div className="flex justify-end mt-4">
                      <Link to={`/members/${member._id}`}>
                        <Button size="sm" variant="outline" className="flex items-center">
                          <Eye className="mr-1 h-4 w-4" />
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No members found matching your search.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ViewMembers;
