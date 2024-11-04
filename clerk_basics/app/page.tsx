import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  console.log(user);
  // const email = user?.emailAddresses[0].emailAddress;

  const firstName = user?.firstName;
  const lastName = user?.lastName;

  // if there is a username
  // const username = user?.username;

  return (
    <div>
      <h1 className="text-4xl font-bold text-center m-10">Home</h1>
      <p className="text-center text-2xl">
        {user ? `Welcome ${firstName} ${lastName}` : 'Please sign in to continue'}
      </p>
    </div>
  );
}
