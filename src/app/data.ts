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
  }
];
