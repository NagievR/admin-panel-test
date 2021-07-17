const myLabels = {
  Doctor: 'Специалисты',
  Test: 'Тестовые данные',
  Admin: 'Администрация'
};

const translations = {
  actions: {
    new: 'Создать',
    edit: 'Редактировать',
    show: 'Просмотр',
    delete: 'Удалить',
    bulkDelete: 'Удалить всё',
    list: 'Список'
  },
  buttons: {
    save: 'Сохранить',
    addNewItem: 'Добавить элемент',
    filter: 'Фильтр',
    applyChanges: 'Применить',
    resetFilter: 'Сбросить',
    confirmRemovalMany: 'Удалить выбранные',
    // confirmRemovalMany: 'Confirm the removal of {{count}} record',
    // confirmRemovalMany_plural: 'Confirm the removal of {{count}} records',
    logout: 'Выйти',
    // seeTheDocumentation: 'See: <1>the documentation</1>',
    createFirstRecord: 'Создать первую запись',
    edit: 'Редактировать',
    delete: 'Удалить',
    remove: 'Удалить',
    preview: 'Просмотр',
    show: 'Просмотр'
  },
  labels: {
    navigation: 'Навигация',
    pages: 'Страницы',
    // selectedRecords: 'Selected ({{selected}})',
    filters: 'Фильтры',
    // adminVersion: 'Admin: {{version}}',
    // appVersion: 'App: {{version}}',
    loginWelcome: 'Добро пожаловать!',
    labels: { ...myLabels }
  },

  messages: {
    // successfullyBulkDeleted: 'successfully removed {{count}} record',
    // successfullyBulkDeleted_plural: 'successfully removed {{count}} records',
    successfullyDeleted: 'Информация успешно удалена',
    successfullyUpdated: 'Информация успешно обновлена',
    thereWereValidationErrors: 'Заполните все обязательные поля!',
    // forbiddenError: 'You cannot perform action {{actionName}} on {{resourceId}}',
    // anyForbiddenError: 'You cannot perform given action',
    successfullyCreated: 'Новая запись успешно создана',
    bulkDeleteError: 'Неизвестная ошибка удаления. Попробуйте позже',
    errorFetchingRecords: 'Неизвестная ошибка получения записей. Попробуйте позже',
    errorFetchingRecord: 'Неизвестная ошибка получения записи. Попробуйте позже',
    noRecordsSelected: 'Нету выбранных записей',
    // theseRecordsWillBeRemoved: 'Следующие записи будут удалены:',
    // theseRecordsWillBeRemoved_plural: 'Следующие записи будут удалены:',
    // pickSomeFirstToRemove: 'In order to remove records, you have to pick them first',
    // error404Resource: 'Resource of given id: {{resourceId}} cannot be found',
    // error404Action: 'Resource of given id: {{resourceId}} does not have an action with name: {{actionName}} or you are not authorized to use it!',
    // error404Record: 'Resource of given id: {{resourceId}} does not have a record with id: {{recordId}} or you are not authorized to use it!',
    // seeConsoleForMore: 'See development console for more details...',
    // noActionComponent: 'You have to implement action component for your Action',
    noRecordsInResource: 'Записи отсутствуют в этой таблице',
    noRecords: 'Записи не найдены',
    confirmDelete: 'Удалить этот элемент?',
    // welcomeOnBoard_title: 'Welcome on Board!',
    // welcomeOnBoard_subtitle: 'Now you are one of us! We prepared a few tips for you to start:',
    // loginWelcome: 'To AdminBro - the best admin framework for Node.js apps, based on React.',
    // addingResources_title: 'Adding Resources',
    // addingResources_subtitle: 'How to add new resources to the sidebar',
    // customizeResources_title: 'Customize Resources',
    // customizeResources_subtitle: 'Defining behavior, adding properties and more...',
    // customizeActions_title: 'Customize Actions',
    // customizeActions_subtitle: 'Modifying existing actions and adding new',
    // writeOwnComponents_title: 'Write Components',
    // writeOwnComponents_subtitle: 'How to modify the Look and Feel of AdminBro',
    // customDashboard_title: 'Custom Dashboard',
    // customDashboard_subtitle: 'How to modify this view and add new Pages on the sidebar',
    // roleBasedAccess_title: 'Role-Based Access Control',
    // roleBasedAccess_subtitle: 'Create user roles and permissions in AdminBro',
    // community_title: 'Join the slack community',
    // community_subtitle: 'Talk with the creators of AdminBro and other AdminBro users',
    // foundBug_title: 'Found a Bug? need improvement?',
    // foundBug_subtitle: 'Raise an issue on our GitHub repo',
    // needMoreSolutions_title: 'Need more advanced solutions?',
    // needMoreSolutions_subtitle: 'We are here to provide you a beautiful UX/UI design and tailor made software based (not only) on AdminBro',
    // invalidCredentials: 'Wrong email and/or password'
  }
};

const locale = {
  language: 'ru',
  translations: translations
};

module.exports = locale;
