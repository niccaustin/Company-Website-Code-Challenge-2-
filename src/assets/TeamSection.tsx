import React, { useState, useEffect } from 'react';

interface Name { title: string; first: string; last: string; }
interface Location { city: string; country: string; }
interface Picture { large: string; }
interface UserResult { name: Name; location: Location; picture: Picture; }
interface TeamMemberDisplay { id: number; fullName: string; title: string; location: string; description: string; imageSrc: string; }

const TeamMemberCard: React.FC<{ member: TeamMemberDisplay }> = ({ member }) => (
  <div className="p-4 border border-gray-200 shadow-sm rounded-lg bg-white h-full flex flex-col">
    <img src={member.imageSrc} alt={member.fullName} className="w-32 h-32 object-cover rounded-full mx-auto mb-4 block" />
    <h3 className="text-lg font-semibold text-center mt-2">{member.fullName}</h3>
    <p className="text-sm text-center text-gray-500 mb-4">{member.title}</p>
    <div className="flex-grow flex items-end">
        <p className="text-xs text-center text-gray-600">{member.description}</p>
    </div>
  </div>
);

const TeamSection: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMemberDisplay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=3');
        
        // **IMPORTANT:** Check the status and content type here.
        if (!response.ok) {
            const errorText = await response.text();
            console.error("API returned an error status:", response.status, errorText);
            throw new Error(`HTTP error! status: ${response.status}. Check console for details.`);
        }

        // Clone the response to log the raw text if JSON parsing fails
        const responseClone = response.clone();
        const data: { results: UserResult[] } = await response.json().catch(async (e) => {
            const text = await responseClone.text();
            console.error("Error parsing JSON:", e, "Raw response:", text);
            throw new Error("Failed to parse API response as JSON. Check console for raw response.");
        });
        
        // ... (rest of the mapping logic remains the same) ...
        const formattedData: TeamMemberDisplay[] = data.results.map((user, index) => {
    const userFullName = `${user.name.first} ${user.name.last}`;
    const userLocation = `${user.location.city}, ${user.location.country}`;
    const userTitle = index === 0 ? 'Head Roaster' : index === 1 ? 'Lead Barista' : 'Sourcing Specialist';
    
    let descriptionText: string;

    // Use a switch statement to assign a unique description
    switch (userTitle) {
        case 'Head Roaster':
            descriptionText = `${userFullName} is a Head Roaster based in ${userLocation}. Ensures every batch meets our exceptional quality standards through expertise and innovation.`;
            break;
        case 'Lead Barista':
            descriptionText = `${userFullName} is a Lead Barista based in ${userLocation}. Manages café operations and ensures every visitor leaves with a smile, embodying delight and connection.`;
            break;
        case 'Sourcing Specialist':
            descriptionText = `${userFullName} is a Sourcing Specialist based in ${userLocation}. Connects us to farms, handles feedback, and ensures sustainability and integrity across our supply chain.`;
            break;
        default:
            descriptionText = ``;
    }

    return {
        id: index + 1, 
        fullName: userFullName,
        title: userTitle,
        location: userLocation,
        // Use the newly defined variable for the description
        description: descriptionText, 
        imageSrc: user.picture.large,
    };
});

        setTeamMembers(formattedData);
        setIsLoading(false);

      } catch (err: any) {
        // This will catch the new custom errors
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (isLoading) {
    return <div className="text-center p-12">Loading team members...</div>;
  }

  if (error) {
    return <div className="text-center p-12 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-transparent py-12">
      <h1 className="font-semibold text-center text-4xl mb-12">Our Team</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
