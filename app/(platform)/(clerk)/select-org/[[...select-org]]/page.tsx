import { OrganizationList, UserButton } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
      />
    </div>
  );
}
