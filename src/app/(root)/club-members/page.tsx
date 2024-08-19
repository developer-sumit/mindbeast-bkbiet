// CUSTOM
import PROFILES from "@/data/profiles";
// COMPONENTS
import UserCard from "@/components/shared/UserCard";
import { IUserCardProps } from "@/types";

const MEMBERS = {
  incharges: [PROFILES["sanjeev-sultania"]],
  founders: [
    PROFILES["sumit-singh-rathore"],
    PROFILES["harshvardhan-singh-shekhawat"],
    PROFILES["aayush-joshi"],
  ],
  members: [
    PROFILES["chetna-bhardwaj"],
  ]
};

export default function ClubMembers() {
  return (
    <div className="flex flex-col gap-8 min-h-screen">
      {Object.entries(MEMBERS).map(([title, members], index) => (
        <div key={index} className="w-[min(100%,1100px)] mx-auto">
          <p className="mb-2 font-bold">{title.toUpperCase()}</p>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3">
            {members.map((item: IUserCardProps, innerIndex) =>
              item.socialLinks ? (
                <UserCard
                  key={innerIndex}
                  name={item.name}
                  avatar={item.avatar}
                  role={item.role}
                  socialLinks={item.socialLinks}
                />
              ) : (
                <UserCard
                  key={innerIndex}
                  name={item.name}
                  avatar={item.avatar}
                  role={item.role}
                />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
