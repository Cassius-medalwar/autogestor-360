'use client'

import { Sidebar } from '@/components/custom/sidebar'
import { 
  Users, 
  Plus, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Eye,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import { useState } from 'react'

// Dados de exemplo
const clientesExemplo = [
  {
    id: '1',
    nome: 'João Silva',
    cpf_cnpj: '123.456.789-00',
    email: 'joao.silva@email.com',
    telefone: '(11) 98765-4321',
    whatsapp: '(11) 98765-4321',
    cidade: 'São Paulo',
    estado: 'SP',
    tipo: 'pessoa_fisica',
    total_compras: 2,
    valor_total: 185000
  },
  {
    id: '2',
    nome: 'Maria Santos',
    cpf_cnpj: '987.654.321-00',
    email: 'maria.santos@email.com',
    telefone: '(11) 97654-3210',
    whatsapp: '(11) 97654-3210',
    cidade: 'São Paulo',
    estado: 'SP',
    tipo: 'pessoa_fisica',
    total_compras: 1,
    valor_total: 95000
  },
  {
    id: '3',
    nome: 'Transportadora XYZ Ltda',
    cpf_cnpj: '12.345.678/0001-90',
    email: 'contato@transportadoraxyz.com.br',
    telefone: '(11) 3456-7890',
    whatsapp: '(11) 98888-7777',
    cidade: 'Guarulhos',
    estado: 'SP',
    tipo: 'pessoa_juridica',
    total_compras: 5,
    valor_total: 420000
  },
  {
    id: '4',
    nome: 'Pedro Costa',
    cpf_cnpj: '456.789.123-00',
    email: 'pedro.costa@email.com',
    telefone: '(11) 96543-2109',
    whatsapp: '(11) 96543-2109',
    cidade: 'Osasco',
    estado: 'SP',
    tipo: 'pessoa_fisica',
    total_compras: 1,
    valor_total: 68000
  },
]

export default function ClientesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [tipoFilter, setTipoFilter] = useState('todos')

  const clientesFiltrados = clientesExemplo.filter(cliente => {
    const matchSearch = cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       cliente.cpf_cnpj.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       cliente.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchTipo = tipoFilter === 'todos' || cliente.tipo === tipoFilter
    return matchSearch && matchTipo
  })

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gestão de Clientes</h1>
              <p className="text-sm text-gray-500 mt-1">Gerencie sua base de clientes</p>
            </div>
            <button className="px-4 py-2 bg-[#FF8A00] text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Cadastrar Cliente
            </button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Filtros e Busca */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Busca */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por nome, CPF/CNPJ, email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                />
              </div>

              {/* Filtro de Tipo */}
              <select
                value={tipoFilter}
                onChange={(e) => setTipoFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
              >
                <option value="todos">Todos os Tipos</option>
                <option value="pessoa_fisica">Pessoa Física</option>
                <option value="pessoa_juridica">Pessoa Jurídica</option>
              </select>

              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Mais Filtros
              </button>
            </div>
          </div>

          {/* Estatísticas Rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <p className="text-sm text-gray-500 mb-1">Total de Clientes</p>
              <p className="text-2xl font-bold text-gray-900">247</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <p className="text-sm text-gray-500 mb-1">Pessoa Física</p>
              <p className="text-2xl font-bold text-blue-600">198</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <p className="text-sm text-gray-500 mb-1">Pessoa Jurídica</p>
              <p className="text-2xl font-bold text-purple-600">49</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <p className="text-sm text-gray-500 mb-1">Novos este Mês</p>
              <p className="text-2xl font-bold text-green-600">18</p>
            </div>
          </div>

          {/* Lista de Clientes */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contato
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Localização
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tipo
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Compras
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Valor Total
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {clientesFiltrados.map((cliente) => (
                    <tr key={cliente.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                            {cliente.nome.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{cliente.nome}</div>
                            <div className="text-sm text-gray-500">{cliente.cpf_cnpj}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-sm text-gray-900">
                            <Phone className="w-4 h-4 text-gray-400" />
                            {cliente.telefone}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Mail className="w-4 h-4 text-gray-400" />
                            {cliente.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-sm text-gray-900">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          {cliente.cidade} - {cliente.estado}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`
                          px-2 py-1 rounded-full text-xs font-medium
                          ${cliente.tipo === 'pessoa_fisica' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}
                        `}>
                          {cliente.tipo === 'pessoa_fisica' ? 'Pessoa Física' : 'Pessoa Jurídica'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{cliente.total_compras} veículos</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-green-600">
                          R$ {cliente.valor_total.toLocaleString('pt-BR')}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mensagem se não houver resultados */}
          {clientesFiltrados.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nenhum cliente encontrado</h3>
              <p className="text-gray-500 mb-4">Tente ajustar os filtros ou cadastre um novo cliente</p>
              <button className="px-6 py-2 bg-[#FF8A00] text-white rounded-lg hover:bg-orange-600 transition-colors">
                Cadastrar Cliente
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
