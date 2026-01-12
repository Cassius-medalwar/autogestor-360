'use client'

import { Sidebar } from '@/components/custom/sidebar'
import { 
  TrendingUp, 
  Car, 
  Users, 
  DollarSign,
  ArrowUp,
  ArrowDown,
  Clock,
  AlertCircle,
  Plus
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

// Dados de exemplo
const funnelData = [
  { name: 'Novo Lead', value: 45 },
  { name: 'Atendimento', value: 32 },
  { name: 'Negociação', value: 18 },
  { name: 'Proposta', value: 12 },
  { name: 'Vendido', value: 8 },
]

const cashFlowData = [
  { dia: '01', entrada: 45000, saida: 28000 },
  { dia: '05', entrada: 32000, saida: 15000 },
  { dia: '10', entrada: 58000, saida: 35000 },
  { dia: '15', entrada: 42000, saida: 22000 },
  { dia: '20', entrada: 65000, saida: 38000 },
  { dia: '25', entrada: 48000, saida: 25000 },
  { dia: '30', entrada: 72000, saida: 42000 },
]

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Visão geral do seu negócio</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-[#FF8A00] text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Ação Rápida
              </button>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* KPIs Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Veículos em Estoque */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs font-medium text-green-600 flex items-center gap-1">
                  <ArrowUp className="w-3 h-3" />
                  12%
                </span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Veículos em Estoque</h3>
              <p className="text-3xl font-bold text-gray-900">47</p>
              <p className="text-xs text-gray-500 mt-2">8 consignados</p>
            </div>

            {/* Leads do Dia */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-xs font-medium text-green-600 flex items-center gap-1">
                  <ArrowUp className="w-3 h-3" />
                  8%
                </span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Leads do Dia</h3>
              <p className="text-3xl font-bold text-gray-900">23</p>
              <p className="text-xs text-gray-500 mt-2">5 leads quentes</p>
            </div>

            {/* Vendas no Mês */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-xs font-medium text-green-600 flex items-center gap-1">
                  <ArrowUp className="w-3 h-3" />
                  15%
                </span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Vendas no Mês</h3>
              <p className="text-3xl font-bold text-gray-900">18</p>
              <p className="text-xs text-gray-500 mt-2">Meta: 25 vendas</p>
            </div>

            {/* Lucro Líquido */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-[#FF8A00]" />
                </div>
                <span className="text-xs font-medium text-red-600 flex items-center gap-1">
                  <ArrowDown className="w-3 h-3" />
                  3%
                </span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">Lucro Líquido</h3>
              <p className="text-3xl font-bold text-gray-900">R$ 124.5k</p>
              <p className="text-xs text-gray-500 mt-2">Margem: 18.5%</p>
            </div>
          </div>

          {/* Gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Funil de Vendas */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Funil de Vendas (CRM)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={funnelData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#FF8A00" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Fluxo de Caixa */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Fluxo de Caixa (30 dias)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={cashFlowData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="dia" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="entrada" stroke="#10b981" strokeWidth={2} />
                  <Line type="monotone" dataKey="saida" stroke="#ef4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Listas Rápidas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Veículos com Maior Tempo em Estoque */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Maior Tempo em Estoque</h3>
                <Clock className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-3">
                {[
                  { modelo: 'Fiat Uno 1.0', placa: 'ABC-1234', dias: 87 },
                  { modelo: 'VW Gol 1.6', placa: 'DEF-5678', dias: 72 },
                  { modelo: 'Chevrolet Onix', placa: 'GHI-9012', dias: 65 },
                  { modelo: 'Honda Civic', placa: 'JKL-3456', dias: 58 },
                ].map((veiculo, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{veiculo.modelo}</p>
                      <p className="text-sm text-gray-500">{veiculo.placa}</p>
                    </div>
                    <span className="text-sm font-medium text-orange-600">{veiculo.dias} dias</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leads Recentes */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Leads Recentes</h3>
                <Users className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-3">
                {[
                  { nome: 'João Silva', interesse: 'Honda Civic', status: 'quente' },
                  { nome: 'Maria Santos', interesse: 'Toyota Corolla', status: 'morno' },
                  { nome: 'Pedro Costa', interesse: 'VW Polo', status: 'quente' },
                  { nome: 'Ana Oliveira', interesse: 'Fiat Argo', status: 'frio' },
                ].map((lead, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{lead.nome}</p>
                      <p className="text-sm text-gray-500">{lead.interesse}</p>
                    </div>
                    <span className={`
                      text-xs font-medium px-2 py-1 rounded-full
                      ${lead.status === 'quente' ? 'bg-red-100 text-red-700' : ''}
                      ${lead.status === 'morno' ? 'bg-yellow-100 text-yellow-700' : ''}
                      ${lead.status === 'frio' ? 'bg-blue-100 text-blue-700' : ''}
                    `}>
                      {lead.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contas a Pagar/Receber Hoje */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contas a Pagar */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Contas a Pagar Hoje</h3>
                <AlertCircle className="w-5 h-5 text-red-500" />
              </div>
              <div className="space-y-3">
                {[
                  { descricao: 'Aluguel da loja', valor: 'R$ 3.500,00' },
                  { descricao: 'Fornecedor - Peças', valor: 'R$ 1.200,00' },
                  { descricao: 'Energia elétrica', valor: 'R$ 450,00' },
                ].map((conta, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <p className="font-medium text-gray-900">{conta.descricao}</p>
                    <span className="text-sm font-bold text-red-600">{conta.valor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contas a Receber */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Contas a Receber Hoje</h3>
                <DollarSign className="w-5 h-5 text-green-500" />
              </div>
              <div className="space-y-3">
                {[
                  { descricao: 'Venda - Honda Civic', valor: 'R$ 8.500,00' },
                  { descricao: 'Venda - VW Gol', valor: 'R$ 5.200,00' },
                  { descricao: 'Comissão portal', valor: 'R$ 850,00' },
                ].map((conta, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <p className="font-medium text-gray-900">{conta.descricao}</p>
                    <span className="text-sm font-bold text-green-600">{conta.valor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Atalhos Rápidos */}
          <div className="bg-gradient-to-br from-[#0B1F3B] to-blue-900 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Ações Rápidas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: 'Cadastrar Veículo', icon: Car },
                { label: 'Cadastrar Cliente', icon: Users },
                { label: 'Emitir NF-e', icon: AlertCircle },
                { label: 'Criar Contrato', icon: AlertCircle },
                { label: 'Anunciar Veículo', icon: AlertCircle },
                { label: 'MultiBanco', icon: DollarSign },
              ].map((acao, i) => {
                const Icon = acao.icon
                return (
                  <button
                    key={i}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-lg transition-all duration-200 flex flex-col items-center gap-2"
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-xs font-medium text-center">{acao.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
