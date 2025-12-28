import { lusitana } from "@/app/ui/fonts";
import BanknotesIcon from "@heroicons/react/24/outline/BanknotesIcon";
import ClockIcon from "@heroicons/react/24/outline/ClockIcon";
import InboxIcon from "@heroicons/react/24/outline/InboxIcon";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};
export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
      <div className='rounded-xl bg-red-500 p-2 shadow-sm'>
        <div className='flex p-4 '>
          {Icon ? <Icon className='h-5 w-5 text-gray-700' /> : null}
          <h3 className='ml-2 text-sm font-medium'>{title}</h3>
        </div>
        <p
          className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}>
          {value}
        </p>
      </div>
    </div>
  );
}
