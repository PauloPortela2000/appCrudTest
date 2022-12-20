import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from './Dashboard';
import ListAudit from './Audit/ListAudit';
const routes = [
  {
    icon: 'k-i-pencil',
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/audit',
    name: 'Audit',
    component: ListAudit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
