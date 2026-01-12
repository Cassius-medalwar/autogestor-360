'use client'

import { Sidebar } from '@/components/custom/sidebar'
import { 
  MessageSquare, 
  Plus, 
  Search,
  Phone,
  Mail,
  Calendar,
  TrendingUp,
  User,
  Car
} from 'lucide-react'
import { useState } from 'react'

// Dados de exemplo para o funil
const leadsExemplo = {
  novo: [
    { id: '1', nome: 'Carlos Mendes', telefone: '(11) 98888-7777', veiculo: 'Honda Civic', temperatura: 'quente', data: '2024-01-15' },
    { id: '2', nome: 'Juliana Rocha', telefone: '(11) 97777-6666', veiculo: 'Toyota Corolla', temperatura: 'morno', data: '2024-01-15' },
    { id: '3', nome: 'Roberto Lima', telefone: '(11) 96666-5555', veiculo: 'VW Polo', temperatura: 'frio', data: '2024-01-14' },
  ],
  em_atendimento: [
    { id: '4', nome: 'Fernanda Costa', telefone: '(11) 95555-4444', veiculo: 'Chevrolet Onix', temperatura: 'quente', data: '2024-01-14' },
    { id: '5', nome: 'Marcos Silva', telefone: '(11) 94444-3333', veiculo: 'Fiat Argo', temperatura: 'morno', data: '2024-01-13' },
  ],
  negociacao: [
    { id: '6', nome: 'Patricia Santos', telefone: '(11) 93333-2222', veiculo: 'Hyundai HB20', temperatura: 'quente', data: '2024-01-12' },
    { id: '7', nome: 'André Oliveira', telefone: '(11) 92222-1111', veiculo: 'Renault Kwid', temperatura: 'quente', data: '2024-01-11' },
  ],
  proposta_enviada: [
    { id: '8', nome: 'Luciana Alves', telefone: '(11) 91111-0000', veiculo: 'Jeep Compass', temperatura: 'quente', data: '2024-01-10' },
  ],
  aprovado_banco: [
    { id: '9', nome: 'Ricardo Ferreira', telefone: '(11) 90000-9999', veiculo: 'Honda HR-V', temperatura: 'quente', data: '2024-01-09' },
  ],
  vendido: [
    { id: '10', nome: 'Camila Souza', telefone: '(11) 99999-8888', veiculo: 'Toyota Corolla', temperatura: 'quente', data: '2024-01-08' },
  ],
}

const colunas = [
  { id: 'novo', titulo: 'Novo Lead', cor: 'bg-blue-500', total: leadsExemplo.novo.length },
  { id: 'em_atendimento', titulo: 'Em Atendimento', cor: 'bg-purple-500', total: leadsExemplo.em_atendimento.length },
  { id: 'negociacao', titulo: 'Em Negociação', cor: 'bg-yellow-500', total: leadsExemplo.negociacao.length },
  { id: 'proposta_enviada', titulo: 'Proposta Enviada', cor: 'bg-orange-500', total: leadsExemplo.proposta_enviada.length },
  { id: 'aprovado_banco', titulo: 'Aprovado no Banco', cor: 'bg-teal-500', total: leadsExemplo.aprovado_banco.length },
  { id: 'vendido', titulo: 'Vendido', cor: 'bg-green-500', total: leadsExemplo.vendido.length },
]

export default function CRMPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CRM - Funil de Vendas</h1>
              <p className="text-sm text-gray-500 mt-1">Gerencie seus leads e oportunidades</p>
            </div>
            <button className="px-4 py-2 bg-[#FF8A00] text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Novo Lead
            </button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Estatísticas do Funil */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {colunas.map((coluna) => (
              <div key={coluna.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className={`w-3 h-3 rounded-full ${coluna.cor} mb-2`}></div>
                <p className="text-sm text-gray-500 mb-1">{coluna.titulo}</p>
                <p className="text-2xl font-bold text-gray-900">{coluna.total}</p>
              </div>
            ))}
          </div>

          {/* Busca */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar lead por nome, telefone ou veículo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent"
              />
            </div>
          </div>

          {/* Funil Kanban */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {colunas.map((coluna) => (
                <div key={coluna.id} className="w-80 flex-shrink-0">
                  {/* Header da Coluna */}
                  <div className={`${coluna.cor} text-white rounded-t-xl p-4`}>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold">{coluna.titulo}</h3>
                      <span className="bg-white/20 px-2 py-1 rounded-full text-sm font-medium">
                        {coluna.total}
                      </span>
                    </div>
                  </div>

                  {/* Cards dos Leads */}
                  <div className="bg-gray-100 rounded-b-xl p-3 space-y-3 min-h-[500px]">
                    {leadsExemplo[coluna.id as keyof typeof leadsExemplo]?.map((lead) => (
                      <div key={lead.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                        {/* Nome e Temperatura */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {lead.nome.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 text-sm">{lead.nome}</h4>
                            </div>
                          </div>
                          <span className={`
                            w-3 h-3 rounded-full
                            ${lead.temperatura === 'quente' ? 'bg-red-500' : ''}
                            ${lead.temperatura === 'morno' ? 'bg-yellow-500' : ''}
                            ${lead.temperatura === 'frio' ? 'bg-blue-500' : ''}
                          `} title={lead.temperatura}></span>
                        </div>

                        {/* Veículo de Interesse */}
                        <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                          <Car className="w-4 h-4 text-gray-400" />
                          <span>{lead.veiculo}</span>
                        </div>

                        {/* Telefone */}
                        <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span>{lead.telefone}</span>
                        </div>

                        {/* Data */}
                        <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          <span>{new Date(lead.data).toLocaleDateString('pt-BR')}</span>
                        </div>

                        {/* Ações */}
                        <div className="flex gap-2 pt-3 border-t border-gray-100">
                          <button className="flex-1 px-3 py-1.5 bg-green-500 text-white rounded text-xs font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-1">
                            <MessageSquare className="w-3 h-3" />
                            WhatsApp
                          </button>
                          <button className="flex-1 px-3 py-1.5 bg-[#0B1F3B] text-white rounded text-xs font-medium hover:bg-blue-900 transition-colors flex items-center justify-center gap-1">
                            <User className="w-3 h-3" />
                            Ver Mais
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* Botão Adicionar */}
                    <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" />
                      <span className="text-sm font-medium">Adicionar Lead</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estatísticas de Conversão */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#FF8A00]" />
              Taxa de Conversão do Funil
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Novo → Atendimento</p>
                <p className="text-2xl font-bold text-blue-600">71%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Atendimento → Negociação</p>
                <p className="text-2xl font-bold text-purple-600">90%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Negociação → Proposta</p>
                <p className="text-2xl font-bold text-yellow-600">50%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Proposta → Aprovado</p>
                <p className="text-2xl font-bold text-orange-600">100%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Aprovado → Vendido</p>
                <p className="text-2xl font-bold text-green-600">100%</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
