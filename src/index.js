import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from './Dashboard';
import ListAudit from '../../Audit/ListAudit';
import ListNorms from '../../Norms/ListNorms';
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
  {
    path: '/norms',
    name: 'Norms',
    component: ListNorms,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
