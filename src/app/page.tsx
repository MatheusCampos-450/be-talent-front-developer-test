'use client';

import SearchInput from '@/shared/components/SearchInput';

import TableRoot from '@/shared/components/TableDesktop/TableRoot';
import TableHeader from '@/shared/components/TableDesktop/TableHeader';
import TableBody from '@/shared/components/TableDesktop/TableBody';
import { useIsMobile } from '@/shared/hooks/useIsMobile';
import TableMobile from '@/shared/components/TableMobile';

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="pt-lg px-sm bg-gray00 flex h-full w-full flex-col items-center justify-start">
      <div className="w-full max-w-[96.1rem] flex-col sm:flex sm:flex-row sm:items-center sm:justify-between">
        <h1 className="sm:pb-none pb-[2.4rem] text-lg text-black">
          Funcionários
        </h1>

        <SearchInput />
      </div>

      {isMobile ? (
        <TableMobile />
      ) : (
        <TableRoot className="mt-lg">
          <TableHeader />
          <TableBody />
        </TableRoot>
      )}
    </div>
  );
}
