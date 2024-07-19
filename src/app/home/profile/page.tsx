import { auth } from "@/auth.config";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileData } from "@/features/profile";
import prisma from "@/lib/prisma";
import { getInitials } from "@/lib/utils";

export default async function ProfilePage() {
  const session = await auth()

  const profileInfo = await prisma.profile.findUnique({
    where: {
      userId: session?.user?.id
    }
  })

  const initials = getInitials(session?.user?.name || "")

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col items-center gap-6 mb-8">
        <div className="flex flex-col items-center gap-2">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h1 className="text-3xl font-bold">{session?.user?.name}</h1>
            <p className="text-muted-foreground">Software Engineer</p>
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Descripcion</h2>
          <p className="text-muted-foreground">
            {profileInfo?.bio || 'Sin descripcion, puedes redactar una!'}
          </p>
        </div>
        <ProfileData />

      </div>
    </div>
  );
}

