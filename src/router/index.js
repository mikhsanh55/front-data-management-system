import Vue from 'vue'
import Router from 'vue-router'
import store from './../store.js'

// Containers
const TheContainer = () => import('@/containers/TheContainer')
const Notification = () => import('@/views/Notification')

// Views
const Dashboard = () => import('@/views/Dashboard')
const Konsumen = () => import('@/views/konsumen/Konsumen')
const AddKonsumen = () => import('@/views/konsumen/AddKonsumen')
const EditKonsumen = () => import('@/views/konsumen/EditKonsumen')
const DetailKonsumen = () => import('@/views/konsumen/DetailKonsumen')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Register = () => import('@/views/pages/Register')
const Login = () => import('@/views/auth/Login')
const Forgot = () => import('@/views/auth/Forgot')

// Products
const ListHarga = () => import('@/views/produk/ListHarga')
const DetailListHarga = () => import('@/views/produk/Detail')
const AddBarang = () => import('@/views/produk/AddBarang')
const EditBarang = () => import('@/views/produk/EditBarang')
const StockInOut = () => import('@/views/produk/StockInOut')
const EditStockInOut = () => import('@/views/produk/EditStockInOut')
const AddStockInOut = () => import('@/views/produk/AddStockInOut')
const BarangPesanan = () => import('@/views/produk/BarangPesanan')

// PO
const PO = () => import('@/views/po/po')
const AddPO = () => import('@/views/po/AddPO')
const EditPO = () => import('@/views/po/EditPO')
const DetailPO = () => import('@/views/po/DetailPO')
const OrderPO = () => import('@/views/po/OrderPO')
const DataOrderPO = () => import('@/views/po/DataOrderPO')
const RequestPO = () => import('@/views/po/RequestPO')
const DetailRequestPO = () => import('@/views/po/DetailRequestPO')
const EditRequestPO = () => import('@/views/po/EditRequestPO')
const AddRequestPO = () => import('@/views/po/AddRequestPO')

// Sales
const Sales = () => import('@/views/sales/Sales')
const AddSales = () => import('@/views/sales/AddSales')
const EditSales = () => import('@/views/sales/EditSales')
const DetailSales = () => import('@/views/sales/Detail')

// Profile
const Profile = () => import('@/views/users/Profile')

// Asset
const Asset = () => import('@/views/asset/Asset')
const AddAsset = () => import('@/views/asset/AddAsset')
const EditAsset = () => import('@/views/asset/EditAsset')

// Karyawan
const Karyawan = () => import('@/views/karyawan/Karyawan')
const AddKaryawan = () => import('@/views/karyawan/AddKaryawan')
const EditKaryawan = () => import('@/views/karyawan/EditKaryawan')
const DetailKaryawan = () => import('@/views/karyawan/Detail')

// Vendor
const Vendor = () => import('@/views/vendor/Vendor')
const AddVendor = () => import('@/views/vendor/AddVendor')
const EditVendor = () => import('@/views/vendor/EditVendor')
const DetailVendor = () => import('@/views/vendor/DetailVendor')

// Kwitansi
const Kwitansi = () => import('@/views/kwitansi/Kwitansi')
const AddKwitansi = () => import('@/views/kwitansi/AddKwitansi')
const EditKwitansi = () => import('@/views/kwitansi/EditKwitansi')
const DetailKwitansi = () => import('@/views/kwitansi/Detail')

// Kurir
const Kurir = () => import('@/views/kurir/Kurir')
const AddKurir = () => import('@/views/kurir/AddKurir')
const EditKurir = () => import('@/views/kurir/EditKurir')

// User
const User = () => import('@/views/users/User')
const AddUser = () => import('@/views/users/AddUser')
const EditUser = () => import('@/views/users/EditUser')
const DetailUser = () => import('@/views/users/DetailUser')

Vue.use(Router)
const router = new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

export default router

  router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPage = ['/login', '/forgot-password']
    const authRequired = publicPage.includes(to.path) === ''

    if(authRequired && localStorage.getItem('token') === '') {
      next('/login')
      return false
    }
    else {
      next()
    }
  })

function configRoutes () {
  return [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/forgot-password',
        name: 'Forgot Password',
        component: Forgot
      },
      
      {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path:'notification',
          name: 'Notifikasi',
          component:Notification
        },
        {
          path: 'barang',
          name: 'Barang',
          component: ListHarga
        },
        
        {
          path: 'barang',
          name: 'Barang',
          redirect: '/barang',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'detail/:id',
              name: 'Detail Barang',
              component: DetailListHarga
            },
            {
              path: 'add',
              name: 'Tambah Barang',
              component: AddBarang
            },
            {
              path: 'edit/:id',
              name: 'Edit Barang',
              component: EditBarang
            }
          ]
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: 'karyawan',
          name: 'Karyawan',
          component: Karyawan
        },
        
        {
          path:'asset',
          name:'Asset',
          component:Asset
        },
        {
          path: 'konsumen',
          name: 'Konsumen',
          component: Konsumen,
          
        },
        {
          path: 'stock-in-out',
          name: 'Stock In Out',
          component: StockInOut
        },
        {
          path: 'barang-pesanan',
          name: 'Barang Pesanan',
          component: BarangPesanan
        },
        {
          path: 'stock-in-out',
          redirect: '/stock-in-out',
          name: 'Stock In Out',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path:'edit/:id',
              name: 'Edit Stock In Out',
              component: EditStockInOut // Harus Ganti
            },
            {
              path: 'add',
              name: 'Tambah Stock In Out',
              component: AddStockInOut
            }

          ]
        },
        {
          path: 'barang-pesanan',
          redirect: '/barang-pesanan',
          name: 'Barang Pesanan',
          component: {
            render(c) { return c('router-view') }
          },
          children: [
            {
              path: 'edit/:id',
              name: 'Edit Barang Pesanan',
              component: BarangPesanan
            }
          ]
        },
        {
          path: 'konsumen',
          redirect: '/konsumen',
          name:'Konsumen',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'add',
              name: 'Tambah Konsumen',
              component: AddKonsumen
            },
            {
              path: 'edit/:id',
              name: 'Edit Konsumen',
              component: EditKonsumen
            },
            {
              path: 'detail/:id',
              name: 'Detail Konsumen',
              component: DetailKonsumen
            }
          ]
        },
        {
          path: 'po',
          name: 'PO',
          component: PO
        },
        {
          path: 'po',
          redirect: '/po',
          name: 'Purchase Order',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'add',
              name: 'Tambah Purchase Order',
              component: AddPO
            },
            {
              path: 'edit/:id',
              name: 'Edit Purchase Order',
              component: EditPO
            },
            {
              path: 'detail/:id',
              name: 'Detail Purchase Order',
              component: DetailPO
            },
            {
              path: 'order-barang/:id',
              name: 'Order Barang',
              component: OrderPO
            },
            {
              path: 'data-order-barang',
              name: 'Data Order Barang',
              component: DataOrderPO
            },
            {
              path: 'data-request-barang',
              name: 'Request Barang',
              component: RequestPO
            },
            {
              path: 'data-request-barang/add',
              name: 'Tambah Request Barang',
              component: AddRequestPO
            },
            {
              path: 'data-request-barang/edit/:id',
              name: 'Edit Request Barang',
              component: EditRequestPO
            },
            {
              path: 'data-request-barang/:id',
              name: 'Detail Request Barang',
              component: DetailRequestPO
            }
          ]
        },
        {
          path: 'sales',
          name: 'Sales',
          component: Sales,
        },
        {
          path: 'sales',
          name: 'Sales',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path:'add',
              name:'Tambah Sales',
              component: AddSales
            },
            {
              path:'edit/:id',
              name: 'Edit Sales',
              component: EditSales
            },
            {
              path: 'detail/:id',
              name: 'Detail Sales',
              component: DetailSales
            }
          ]
        },
        {
          path: 'karyawan',
          redirect: '/karyawan',
          name: 'Karyawan',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path:'add',
              name: 'Tambah Karyawan',
              component: AddKaryawan
            },
            {
              path: 'edit/:id',
              name: 'Edit Karyawan',
              component: EditKaryawan
            },
            {
              path: 'detail/:id',
              name: 'Detail Karyawan',
              component: DetailKaryawan
            }
          ]
        },
        {
          path: 'asset',
          redirect:'/asset',
          name: 'Asset',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'add',
              name: 'Tambah Asset',
              component: AddAsset
            },
            {
              path: 'edit/:id',
              name: 'Edit Asset',
              component: EditAsset
            }
          ]
        },
        {
          path:'vendor',
          name: 'Vendor',
          component: Vendor
        },
        {
          path: 'vendor',
          redirect: '/vendor',
          name: 'Vendor',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'add',
              name: 'Tambah Vendor',
              component: AddVendor
            },
            {
              path: 'edit/:id',
              name: 'Edit Vendor',
              component: EditVendor
            },
            {
              path:'detail/:id',
              name: 'Detail Vendor',
              component: DetailVendor
            }
          ]
        },
        {
          path: 'kwitansi',
          name: 'Kwitansi',
          component: Kwitansi
        },
        {
          path: 'kwitansi',
          redirect: '/kwitansi',
          name: 'Kwitansi',
          component: {
            render (c) {return c('router-view')}
          },
          children: [
            {
              path:'add',
              name: 'Tambah Kwitansi',
              component: AddKwitansi
            },
            {
              path: 'edit/:id',
              name: 'Edit Kwitansi',
              component: EditKwitansi
            },
            {
              path: 'detail/:id',
              name: 'Detail Kwitansi',
              component: DetailKwitansi
            }
          ]
        },
        {
          path: 'kurir',
          name: 'Kurir',
          component: Kurir
        },
        {
          path: 'kurir',
          redirect: '/kurir',
          name: 'Kurir',
          component: {
            render (c) {return c('router-view')}
          },
          children: [
            {
              path:'add',
              name: 'Tambah Kurir',
              component: AddKurir
            },
            {
              path: 'edit/:id',
              name: 'Edit Kurir',
              component: EditKurir
            }
          ]
        },
        {
          path:'user',
          name:'User',
          component:User
        },
        {
          path:'user',
          redirect:'/user',
          name:'User',
          component: {
            render(c) {return c('router-view')}
          },
          children: [
            {
              path:'add',
              name:'Tambah User',
              component:AddUser
            },
            {
              path:'edit/:id',
              name:'Edit User',
              component:EditUser
            },
            {
              path:'detail/:id',
              name: 'Detail User',
              component:DetailUser
            }
          ]
        }
      ]
    },
  ]
}

