export const Step = ({
  id,
  title,
  details,
}: {
  id: string;
  title: string;
  details: string;
}) => (
  <div className=' flex gap-x-5 md:gap-x-20 w-full'>
    <div className='flex flex-col gap-y-3 items-center '>
      <span className='text-midnight text-xl'>{id}</span>
      <div className='w-[1px] bg-midnight h-full '></div>
    </div>

    <div className='flex flex-col md:gap-y-5 w-full pb-3'>
      <h4 className='text-heading text-xl font-bold'>{title}</h4>
      <p className='text-body text-sm'>{details}</p>
    </div>
  </div>
);
