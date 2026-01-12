'use client'

import { Sidebar } from '@/components/custom/sidebar'
import { 
  Car, 
  Plus, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Eye,
  MoreVertical
} from 'lucide-react'
import { useState } from 'react'

// Dados de exemplo
const veiculosExemplo = [
  {
    id: '1',
    codigo_interno: 'VEI-001',
    placa: 'ABC-1234',
    marca: 'Honda',
    modelo: 'Civic',
    versao: 'EXL 2.0',
    ano_modelo: 2022,
    cor: 'Prata',
    km: 25000,
    tipo_estoque: 'proprio',
    status: 'disponivel',
    valor_compra: 95000,
    valor_venda: 115000,
    margem_lucro: 20000,
    foto_principal: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    codigo_interno: 'VEI-002',
    placa: 'DEF-5678',
    marca: 'Toyota',
    modelo: 'Corolla',
    versao: 'XEi 2.0',
    ano_modelo: 2021,
    cor: 'Branco',
    km: 38000,
    tipo_estoque: 'consignado',
    status: 'disponivel',
    valor_compra: 88000,
    valor_venda: 105000,
    margem_lucro: 17000,
    foto_principal: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    codigo_interno: 'VEI-003',
    placa: 'GHI-9012',
    marca: 'Volkswagen',
    modelo: 'Polo',
    versao: 'Highline 1.0 TSI',
    ano_modelo: 2023,
    cor: 'Azul',
    km: 12000,
    tipo_estoque: 'proprio',
    status: 'reservado',
    valor_compra: 68000,
    valor_venda: 82000,
    margem_lucro: 14000,
    foto_principal: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    codigo_interno: 'VEI-004',
    placa: 'JKL-3456',
    marca: 'Chevrolet',
    modelo: 'Onix',
    versao: 'Premier 1.0 Turbo',
    ano_modelo: 2022,
    cor: 'Vermelho',
    km: 18000,
    tipo_estoque: 'proprio',
    status: 'disponivel',
    valor_compra: 62000,
    valor_venda: 75000,
    margem_lucro: 13000,
    foto_principal: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop'
  },
]

export default function VeiculosPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('todos')

  const veiculosFiltrados = veiculosExemplo.filter(veiculo => {
    const matchSearch = veiculo.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       veiculo.placa.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       veiculo.marca.toLowerCase().includes(searchTerm.toLowerCase())
    const matchStatus = statusFilter === 'todos' || veiculo.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gestão de Veículos</h1>
              <p className="text-sm text-gray-500 mt-1">Gerencie todo o seu estoque</p>
            </div>
            <button className="px-4 py-2 bg-[#FF8A00] text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Cadastrar Veículo
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
                  placeholder="Buscar por modelo, placa, marca..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
                />
              </div>

              {/* Filtro de Status */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
              >
                <option value="todos">Todos os Status</option>
                <option value="disponivel">Disponível</option>
                <option value="reservado">Reservado</option>
                <option value="vendido">Vendido</option>
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
              <p className="text-sm text-gray-500 mb-1">Total em Estoque</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <p className="text-sm text-gray-500 mb-1">Disponíveis</p>
              <p className="text-2xl font-bold text-green-600">39</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <p className="text-sm text-gray-500 mb-1">Reservados</p>
              <p className="text-2xl font-bold text-yellow-600">5</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <p className="text-sm text-gray-500 mb-1">Consignados</p>
              <p className="text-2xl font-bold text-blue-600">8</p>
            </div>
          </div>

          {/* Lista de Veículos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {veiculosFiltrados.map((veiculo) => (
              <div key={veiculo.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Imagem */}
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={veiculo.foto_principal}
                    alt={`${veiculo.marca} ${veiculo.modelo}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`
                      px-2 py-1 rounded-full text-xs font-medium
                      ${veiculo.status === 'disponivel' ? 'bg-green-100 text-green-700' : ''}
                      ${veiculo.status === 'reservado' ? 'bg-yellow-100 text-yellow-700' : ''}
                      ${veiculo.status === 'vendido' ? 'bg-gray-100 text-gray-700' : ''}
                    `}>
                      {veiculo.status === 'disponivel' ? 'Disponível' : ''}
                      {veiculo.status === 'reservado' ? 'Reservado' : ''}
                      {veiculo.status === 'vendido' ? 'Vendido' : ''}
                    </span>
                    {veiculo.tipo_estoque === 'consignado' && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                        Consignado
                      </span>
                    )}
                  </div>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                {/* Informações */}
                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {veiculo.marca} {veiculo.modelo}
                    </h3>
                    <p className="text-sm text-gray-500">{veiculo.versao}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <div>
                      <p className="text-gray-500">Ano</p>
                      <p className="font-medium text-gray-900">{veiculo.ano_modelo}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">KM</p>
                      <p className="font-medium text-gray-900">{veiculo.km.toLocaleString('pt-BR')}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Placa</p>
                      <p className="font-medium text-gray-900">{veiculo.placa}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Cor</p>
                      <p className="font-medium text-gray-900">{veiculo.cor}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-3 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Valor de Venda</span>
                      <span className="text-lg font-bold text-[#FF8A00]">
                        R$ {veiculo.valor_venda.toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Margem de Lucro</span>
                      <span className="text-sm font-medium text-green-600">
                        R$ {veiculo.margem_lucro.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-[#0B1F3B] text-white rounded-lg hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 text-sm">
                      <Eye className="w-4 h-4" />
                      Ver Detalhes
                    </button>
                    <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="px-3 py-2 border border-red-300 rounded-lg hover:bg-red-50 transition-colors">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensagem se não houver resultados */}
          {veiculosFiltrados.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nenhum veículo encontrado</h3>
              <p className="text-gray-500 mb-4">Tente ajustar os filtros ou cadastre um novo veículo</p>
              <button className="px-6 py-2 bg-[#FF8A00] text-white rounded-lg hover:bg-orange-600 transition-colors">
                Cadastrar Veículo
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
