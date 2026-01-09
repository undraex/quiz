import { SignedIn, UserButton } from "@clerk/nextjs";
import Header from "../_features/Header";

export default function Page() {
  return (
    <div>
      <SignedIn>
        <div className="flex justify-between items-center p-4 gap-4 h-16">
          <Header />
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}
