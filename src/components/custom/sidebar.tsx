'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Car, 
  Users, 
  MessageSquare, 
  DollarSign, 
  FileText, 
  Receipt, 
  Globe, 
  TrendingUp,
  Settings,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Car, label: 'Veículos', href: '/veiculos' },
  { icon: Users, label: 'Clientes', href: '/clientes' },
  { icon: MessageSquare, label: 'CRM', href: '/crm' },
  { icon: DollarSign, label: 'Financeiro', href: '/financeiro' },
  { icon: Receipt, label: 'NF-e', href: '/notas-fiscais' },
  { icon: FileText, label: 'Contratos', href: '/contratos' },
  { icon: Globe, label: 'Anúncios', href: '/anuncios' },
  { icon: TrendingUp, label: 'Relatórios', href: '/relatorios' },
  { icon: Settings, label: 'Configurações', href: '/configuracoes' },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#0B1F3B] text-white rounded-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-[#0B1F3B] text-white w-64 z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF8A00] to-orange-600 rounded-full flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">AutoGestor 360</h1>
              <p className="text-xs text-gray-400">Gestão Completa</p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-[#FF8A00] text-white shadow-lg' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              U
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Usuário Demo</p>
              <p className="text-xs text-gray-400">Administrador</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
