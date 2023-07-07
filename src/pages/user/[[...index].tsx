import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  // Finally, mount the UserProfile component under "/user" 🎉
  // Don't forget to set the "routing" and "path" props
  return <UserProfile routing="path" path="/user" />;
}
