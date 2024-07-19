
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function ProfileData() {
  return (
    <>
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
    </>
  )
}