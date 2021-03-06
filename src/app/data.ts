/**
 * Gantt DataSource
 */


export let projectResources: object[] = [
  { resourceId: 1, resourceName: 'Project Manager' },
  { resourceId: 2, resourceName: 'Software Analyst' },
  { resourceId: 3, resourceName: 'Developer' },
  { resourceId: 4, resourceName: 'Testing Engineer' }
];


export let projectData: { [key: string]: any }[] = [
  {
    taskID: 1,
    taskName: 'OTRO',
    startDate: new Date('07/24/2019 06:00'),
    endDate: new Date('07/25/2019 23:00'),
    subtasks: [
      {
        taskID: 4, taskName: 'PS009', startDate: new Date('07/24/2019 06:00'),
        endDate: new Date('07/24/2019 08:00'), duration: 5, progress: '100', resourceId: [1]
      },
      {
        taskID: 5, taskName: 'VM186', startDate: new Date('07/24/2019 06:00'),
        endDate: new Date('07/24/2019 14:00'), duration: 5, progress: '100', resourceId: [1]
      },
      {
        taskID: 6, taskName: 'VM182', startDate: new Date('07/24/2019 14:00'),
        endDate: new Date('07/24/2019 22:00'), duration: 5, progress: '100', resourceId: [1]
      },
      {
        taskID: 7, taskName: 'SN003', startDate: new Date('07/25/2019 14:00'),
        endDate: new Date('07/25/2019 23:00'), duration: 0
      }
    ]
  },
  {
    taskID: 2,
    taskName: 'VOLVO',
    duration: 3,
    startDate: new Date('07/24/2019 06:00'),
    endDate: new Date('07/25/2019 16:00'),
    subtasks: [
      {
        taskID: 8, taskName: 'VO134', startDate: new Date('07/24/2019 06:00'),
        endDate: new Date('07/24/2019 14:00'), duration: 3, progress: '60', resourceId: [2]
      },
      {
        taskID: 9, taskName: 'EX003', startDate: new Date('07/25/2019 08:00'),
        endDate: new Date('07/25/2019 10:00'), duration: 3, progress: '100', predecessor: 'VOLVO', resourceId: [3]
      },
      {
        taskID: 10, taskName: 'VU010', startDate: new Date('07/25/2019 14:00'),
        endDate: new Date('07/25/2019 17:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      }
    ]
  },
  {
    taskID: 11,
    taskName: 'MGD',
    duration: 4,
    startDate: new Date('07/24/2019 06:00'),
    endDate: new Date('07/28/2019 16:00'),
    subtasks: [
      {
        taskID: 12, taskName: 'PS018', startDate: new Date('07/24/2019 06:00'),
        endDate: new Date('07/24/2019 14:00'), duration: 3, progress: '60', resourceId: [2]
      },
      {
        taskID: 13, taskName: 'PU006', startDate: new Date('07/25/2019 08:00'),
        endDate: new Date('07/25/2019 10:00'), duration: 3, progress: '100', predecessor: 'MGD', resourceId: [3]
      },
      {
        taskID: 14, taskName: 'SB010', startDate: new Date('07/25/2019 14:00'),
        endDate: new Date('07/25/2019 17:00'), duration: 2, progress: '80', predecessor: 'MGD', resourceId: [1]
      },
      {
        taskID: 15, taskName: 'GI003', startDate: new Date('07/26/2019 12:00'),
        endDate: new Date('07/26/2019 17:00'), duration: 2, progress: '80', predecessor: 'MGD', resourceId: [1]
      },
      {
        taskID: 16, taskName: 'PS019', startDate: new Date('07/26/2019 14:00'),
        endDate: new Date('07/26/2019 17:00'), duration: 2, progress: '80', predecessor: 'MGD', resourceId: [1]
      },
      {
        taskID: 17, taskName: 'VM184', startDate: new Date('07/27/2019 08:00'),
        endDate: new Date('07/27/2019 17:00'), duration: 2, progress: '80', predecessor: 'MGD', resourceId: [1]
      },
      {
        taskID: 18, taskName: 'PS026', startDate: new Date('07/27/2019 10:30'),
        endDate: new Date('07/27/2019 12:00'), duration: 2, progress: '80', predecessor: 'MGD', resourceId: [1]
      },
      {
        taskID: 19, taskName: 'PS027', startDate: new Date('07/28/2019 12:00'),
        endDate: new Date('07/27/2019 14:30'), duration: 2, progress: '80', predecessor: 'MGD', resourceId: [1]
      },
      {
        taskID: 20, taskName: 'PS026', startDate: new Date('07/28/2019 12:00'),
        endDate: new Date('07/28/2019 17:00'), duration: 2, progress: '80', predecessor: 'MGD', resourceId: [1]
      },
      {
        taskID: 21, taskName: 'VM184', startDate: new Date('07/28/2019 14:00'),
        endDate: new Date('07/28/2019 22:00'), duration: 2, progress: '80', predecessor: 'MGD', resourceId: [1]
      },
      {
        taskID: 22, taskName: 'VM184', startDate: new Date('07/28/2019 17:00'),
        endDate: new Date('07/28/2019 20:00'), duration: 2, progress: '80', predecessor: 'MGD', resourceId: [1]
      }
    ]
  },
  {
    taskID: 23,
    taskName: 'CALLE 1',
    duration: 4,
    startDate: new Date('07/26/2019 08:00'),
    endDate: new Date('07/29/2019 22:00'),
    subtasks: [
      {
        taskID: 24, taskName: 'PS018', startDate: new Date('07/25/2019 06:00'),
        endDate: new Date('07/25/2019 11:00'), duration: 3, progress: '60', resourceId: [2]
      },
      {
        taskID: 25, taskName: 'PU006', startDate: new Date('07/25/2019 08:00'),
        endDate: new Date('07/25/2019 10:00'), duration: 3, progress: '100', predecessor: 'VOLVO', resourceId: [3]
      },
      {
        taskID: 26, taskName: 'SB010', startDate: new Date('07/25/2019 14:00'),
        endDate: new Date('07/25/2019 17:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 27, taskName: 'GI003', startDate: new Date('07/26/2019 12:00'),
        endDate: new Date('07/26/2019 17:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 28, taskName: 'PS019', startDate: new Date('07/26/2019 14:00'),
        endDate: new Date('07/26/2019 17:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 29, taskName: 'VM184', startDate: new Date('07/27/2019 08:00'),
        endDate: new Date('07/27/2019 17:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 30, taskName: 'PS026', startDate: new Date('07/27/2019 10:30'),
        endDate: new Date('07/27/2019 12:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 31, taskName: 'PS027', startDate: new Date('07/28/2019 12:00'),
        endDate: new Date('07/27/2019 14:30'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 32, taskName: 'PS026', startDate: new Date('07/28/2019 12:00'),
        endDate: new Date('07/28/2019 17:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 33, taskName: 'VM184', startDate: new Date('07/28/2019 14:00'),
        endDate: new Date('07/28/2019 22:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 34, taskName: 'VM184', startDate: new Date('07/28/2019 17:00'),
        endDate: new Date('07/29/2019 20:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      }
    ]
  },
  {
    taskID: 35,
    taskName: 'CALLE 2',
    duration: 4,
    startDate: new Date('07/27/2019 08:00'),
    endDate: new Date('07/29/2019 22:00'),
    subtasks: [
      {
        taskID: 36, taskName: 'PS017', startDate: new Date('07/27/2019 06:00'),
        endDate: new Date('07/27/2019 11:00'), duration: 3, progress: '60', resourceId: [2]
      },
      {
        taskID: 37, taskName: 'PU005', startDate: new Date('07/27/2019 08:00'),
        endDate: new Date('07/27/2019 10:00'), duration: 3, progress: '100', predecessor: 'VOLVO', resourceId: [3]
      },
      {
        taskID: 38, taskName: 'GI002', startDate: new Date('07/27/2019 14:00'),
        endDate: new Date('07/27/2019 17:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 39, taskName: 'SU003', startDate: new Date('07/28/2019 12:00'),
        endDate: new Date('07/28/2019 17:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 40, taskName: 'PS011', startDate: new Date('07/28/2019 14:00'),
        endDate: new Date('07/28/2019 17:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 41, taskName: 'VM182', startDate: new Date('07/29/2019 08:00'),
        endDate: new Date('07/28/2019 17:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 42, taskName: 'PS021', startDate: new Date('07/29/2019 10:30'),
        endDate: new Date('07/28/2019 12:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 43, taskName: 'PS021', startDate: new Date('07/30/2019 12:00'),
        endDate: new Date('07/29/2019 14:30'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 44, taskName: 'PS022', startDate: new Date('07/30/2019 12:00'),
        endDate: new Date('07/30/2019 17:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 45, taskName: 'VM185', startDate: new Date('07/30/2019 14:00'),
        endDate: new Date('07/30/2019 22:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      },
      {
        taskID: 46, taskName: 'VM186', startDate: new Date('07/30/2019 17:00'),
        endDate: new Date('07/31/2019 20:00'), duration: 2, progress: '80', predecessor: 'VOLVO', resourceId: [1]
      }
    ]
  }
];
