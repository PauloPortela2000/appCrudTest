import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from './go-360-audit/Dashboard';
import ListAudit from './go-360-audit/Audit/ListAudit';
import CreateAudit from './go-360-audit/Audit/CreateAudit';
import EditAudit from './go-360-audit/Audit/EditAudit';
import DetailsAudit from './go-360-audit/Audit/DetailsAudit';
import ListNorms from './go-360-audit/Norms/ListNorms';
import ListSubcontrols from './go-360-audit/Subcontrols/ListSubcontrols';
import CreateSubcontrols from './go-360-audit/Subcontrols/CreateSubcontrols';
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
    path: '/createaudit',
    name: 'CreateAudit',
    component: CreateAudit,
  },
  {
    path: '/editaudit',
    name: 'EditAudit',
    component: EditAudit,
  },
  {
    path: '/detailsaudit',
    name: 'DetailsAudit',
    component: DetailsAudit,
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
  {
    path: '/createsubcontrols',
    name: 'CreateSubcontrols',
    component: CreateSubcontrols,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
