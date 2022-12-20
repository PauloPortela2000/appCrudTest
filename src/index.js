import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from './go-360-audit/Dashboard';
import ListAudit from './go-360-audit/Audit/ListAudit';
import ListNorms from './go-360-audit/Norms/ListNorms';
import ListNorms from './go-360-audit/Norms/ListNorms';
import ListSubcontrols from './go-360-audit/Subcontrols/ListSubcontrols';
import ListControls from './go-360-audit/Controls/ListControls';
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
  {
    path: '/controls',
    name: 'Controls',
    component: ListControls,
  },
  {
    path: '/subcontrols',
    name: 'Subcontrols',
    component: ListSubcontrols,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
