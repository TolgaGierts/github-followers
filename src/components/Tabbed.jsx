const tabs = [
  { name: 'Followers', href: '#', current: true },
  { name: 'Favorites', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Tabbed = ({ currentTab, setCurrentTab, followCount, favCount }) => {
  const handleTabClick = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <div>
      <div>
        <label htmlFor='tabs' className='sr-only'>
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        {/* <select
          id='tabs'
          name='tabs'
          className='block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select> */}
      </div>
      <div className='mx-auto sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3'>
        <nav
          className='isolate flex divide-x divide-gray-200 rounded-lg shadow'
          aria-label='Tabs'
        >
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              onClick={() => handleTabClick(tab.name)}
              className={classNames(
                currentTab === tab.name
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
              )}
              aria-current={currentTab === tab.name ? 'page' : undefined}
            >
              <span>{tab.name}</span>
              {tab.name === 'Followers' ? (
                <span className='ml-2'>{followCount}</span>
              ) : (
                <span className='ml-2'>{favCount}</span>
              )}
              <span
                className={classNames(
                  currentTab === tab.name ? 'bg-green-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tabbed;
