
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Building, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import api, { Member } from "../services/api";

const MemberDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [member, setMember] = useState<Member | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Sample members data for demo purposes
  const sampleMembers: { [key: string]: Member } = {
    "1": {
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
    "2": {
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
    "3": {
      _id: "3",
      name: "HARISH B (RA2211056010099)",
      role: "ENGINEER",
      email: "hb1651@srmist.edu.in",
      phone: "+918870693131",
      image: "/images/harish.png", 
      department: "DSBS",
      joinDate: "2025-04-30",
      skills: ["Figma", "Adobe XD", "Wireframing", "User Research", "Prototyping"]
    },
  };

  useEffect(() => {
    const fetchMember = async () => {
      if (!id) return;
      
      try {
        // In a real application, we would fetch data from the API:
        // const data = await api.getMemberById(id);
        // setMember(data);
        
        // For demo purposes, we'll use sample data after a short delay
        setTimeout(() => {
          setMember(sampleMembers[id] || null);
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching member details:", error);
        setIsLoading(false);
      }
    };
    
    fetchMember();
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-32 w-32 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-6 w-64 bg-gray-200 rounded mb-3"></div>
          <div className="h-4 w-48 bg-gray-200 rounded mb-6"></div>
          <div className="w-full max-w-md">
            <div className="h-4 w-full bg-gray-200 rounded mb-3"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!member) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Member Not Found</h2>
        <p className="text-gray-600 mb-6">The member you're looking for doesn't exist or has been removed.</p>
        <Link to="/members">
          <Button className="bg-team-blue hover:bg-blue-600">
            Go Back to Members
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link to="/members">
          <Button variant="ghost" className="flex items-center text-gray-600 hover:text-team-blue">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Members
          </Button>
        </Link>
      </div>
      
      <Card>
        <CardHeader className="bg-team-blue text-white flex flex-col items-center pt-8 pb-8">
          <div className="h-32 w-32 rounded-full overflow-hidden bg-white mb-4 border-4 border-white">
            <img 
              src={member.image || "/placeholder.svg"} 
              alt={`${member.name}'s profile`} 
              className="h-full w-full object-cover"
            />
          </div>
          <CardTitle className="text-2xl mb-1">{member.name}</CardTitle>
          <p className="text-blue-100">{member.role}</p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800">{member.email}</p>
                  </div>
                </div>
                
                {member.phone && (
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-800">{member.phone}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">Team Information</h3>
              <div className="space-y-3">
                {member.department && (
                  <div className="flex items-start">
                    <Building className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Department</p>
                      <p className="text-gray-800">{member.department}</p>
                    </div>
                  </div>
                )}
                
                {member.joinDate && (
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Join Date</p>
                      <p className="text-gray-800">
                        {new Date(member.joinDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          {member.skills && member.skills.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800 flex items-center">
                <Tag className="h-5 w-5 text-gray-500 mr-2" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, index) => (
                  <div key={index} className="bg-team-gray px-3 py-1 rounded-full text-gray-700 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MemberDetails;
