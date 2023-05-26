export const data = [
  {
    section: 'General',
    icon: <Menu />,
    reports: [{
      title: 'Company Snapshot',
      desc: 'Get an accurate picture of the size your organization\'s workforce',
      key: 'control-center-reports-company-snapshot',
      uri: '/company-snapshot',
      has_bookmarked: false,
    },
    {
      title: 'Turnover & Attrition',
      desc: 'Get an overview of how long employees typically stay in your organization',
      key: 'control-center-reports-turnover-attrition',
      uri: '/turnover-attrition',
      has_bookmarked: false,
    },
    {
      title: 'Birthday',
      desc: 'Get an overview of your employees\' birthdays in a calendar year',
      key: 'control-center-reports-birthdays',
      uri: '/birthdays',
      has_bookmarked: false,
    },
    {
      title: 'Employment Anniversary',
      desc: 'Get an overview of employees\' work completion for a consecutive period of 12 months in a calendar year',
      key: 'control-center-reports-employments-anniversaries',
      uri: '/employments-anniversaries',
      has_bookmarked: false,
    }],
  },
  {
    section: 'Activity',
    icon: <PlusLine />,
    reports: [{
      title: 'Time & Activity',
      desc: 'Get an accurate picture of the size your organization\'s workforce',
      key: 'control-center-reports-activities',
      uri: '/activities',
      has_bookmarked: false,
    },
    {
      title: 'Manual Time Edit',
      desc: 'See what project/task employees manually added time for',
      key: 'control-center-reports-manual-time',
      uri: '/manual-time',
      has_bookmarked: false,
    },
    {
      title: 'Untracked Activity',
      desc: 'See who hasn\'t tracked their working hours through the desktop app',
      key: 'control-center-reports-untracked-activities',
      uri: '/untracked-activities',
      has_bookmarked: false,
    },
    ],
  },
  {
    section: 'Leave',
    icon: <Calendar />,
    reports: [{
      title: 'Upcoming Time Off',
      desc: 'Get an overview of approved upcoming employee time off',
      key: 'control-center-reports-upcoming-leaves',
      uri: '/upcoming-leaves',
      has_bookmarked: false,
    },
    {
      title: 'Leave Taken & Balance',
      desc: 'Get an overview of what type of leave was taken, when and how long',
      key: 'control-center-reports-leave-balance',
      uri: '/leave-balance',
      has_bookmarked: false,
    },
    {
      title: 'Attendance & Absence',
      desc: 'Get an accurate picture of who\'s clocked in, how long they worked and absences',
      key: 'control-center-reports-attendances',
      uri: '/attendances',
      has_bookmarked: false,
    },
    ],
  },
];

  const items = [
    {
      key: 0,
      section: '',
      value: 'All Reports',
    },
    {
      key: 1,
      section: 'General',
      value: 'Company Snapshot',
    }, {
      key: 2,
      section: 'General',
      value: 'Turnover & Attrition',
    }, {
      key: 3,
      section: 'General',
      value: 'Birthday',
    },
    {
      key: 4,
      section: 'General',
      value: 'Employment Anniversary',
    },
    {
      key: 5,
      section: 'Activity',
      value: 'Time & Activity',
    },
    {
      key: 6,
      section: 'Activity',
      value: 'Manual Time Edit',
    },
    {
      key: 7,
      section: 'Activity',
      value: 'Untracked Activity',
    },
    {
      key: 8,
      section: 'Leave',
      value: 'Upcoming Time Off',
    },
    {
      key: 9,
      section: 'Leave',
      value: 'Leave Taken & Balance',
    },
    {
      key: 10,
      section: 'Leave',
      value: 'Attendance & Absence',
    },
  ];
