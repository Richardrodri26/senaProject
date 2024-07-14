
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function Profile() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col items-center gap-6 mb-8">
        <div className="flex flex-col items-center gap-2">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>RR</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h1 className="text-3xl font-bold">Richard Rodriguez</h1>
            <p className="text-muted-foreground">Software Engineer</p>
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Descripcion</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laudantium perspiciatis modi hic dolores saepe ipsum aut. Quos quod pariatur corrupti earum vero ea quibusdam, mollitia rem qui corporis illum.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Experiencia laboral</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Junior Software Engineer</CardTitle>
                <CardDescription>Acme Inc.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti voluptates temporibus impedit illo similique reiciendis, officiis blanditiis eaque vel consequatur sint, eveniet at!
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Software Engineer</CardTitle>
                <CardDescription>Globex Corp.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque error sint, amet repellat, numquam tempore modi rem dicta maiores earum vitae!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Proyectos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Project A</CardTitle>
                <CardDescription>Acme Inc.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni perspiciatis consequatur, ipsa hic ipsum voluptates aspernatur laborum ab voluptatum, corporis ex! Ut consectetur voluptates sit libero laborum!
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project B</CardTitle>
                <CardDescription>Globex Corp.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores veniam possimus sed.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project C</CardTitle>
                <CardDescription>Acme Inc.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officiis accusamus voluptatem consequatur deserunt dolor dicta doloremque perspiciatis similique natus!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}