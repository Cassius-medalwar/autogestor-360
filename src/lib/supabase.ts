import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos do banco de dados
export type Veiculo = {
  id: string
  codigo_interno?: string
  placa: string
  chassi?: string
  renavam?: string
  marca: string
  modelo: string
  versao?: string
  ano_fabricacao?: number
  ano_modelo?: number
  cor?: string
  combustivel?: string
  cambio?: string
  km?: number
  tipo_estoque: 'proprio' | 'consignado'
  status: 'disponivel' | 'vendido' | 'reservado'
  valor_compra?: number
  valor_venda?: number
  margem_lucro?: number
  descricao?: string
  observacoes?: string
  foto_principal?: string
  fotos?: string[]
  documentos?: any[]
  fornecedor_id?: string
  loja_id?: string
  vendedor_id?: string
  data_entrada?: string
  data_venda?: string
  created_at?: string
  updated_at?: string
}

export type Cliente = {
  id: string
  nome: string
  cpf_cnpj?: string
  email?: string
  telefone?: string
  whatsapp?: string
  endereco?: string
  cidade?: string
  estado?: string
  cep?: string
  data_nascimento?: string
  tipo: 'pessoa_fisica' | 'pessoa_juridica'
  observacoes?: string
  loja_id?: string
  created_at?: string
  updated_at?: string
}

export type Lead = {
  id: string
  nome: string
  email?: string
  telefone?: string
  whatsapp?: string
  veiculo_interesse_id?: string
  origem?: string
  status: 'novo' | 'em_atendimento' | 'negociacao' | 'proposta_enviada' | 'aprovado_banco' | 'vendido' | 'perdido'
  temperatura: 'frio' | 'morno' | 'quente'
  observacoes?: string
  vendedor_id?: string
  loja_id?: string
  data_ultimo_contato?: string
  data_proximo_contato?: string
  created_at?: string
  updated_at?: string
}

export type ContaFinanceira = {
  id: string
  tipo: 'pagar' | 'receber'
  descricao: string
  categoria?: string
  centro_custo?: string
  valor: number
  data_vencimento: string
  data_pagamento?: string
  status: 'pendente' | 'pago' | 'atrasado' | 'cancelado'
  forma_pagamento?: string
  veiculo_id?: string
  cliente_id?: string
  fornecedor_id?: string
  loja_id?: string
  observacoes?: string
  created_at?: string
  updated_at?: string
}
