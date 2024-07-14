import AdminPanelLayout from "@/composables/layouts/HomeLayout";

export default function HomeAppLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminPanelLayout>
      {children}
    </AdminPanelLayout>
  );
}