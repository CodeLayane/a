/**
 * ========================================
 * Contato - Página de Contato
 * ========================================
 */

import { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Envelope, 
  Clock,
  WhatsappLogo,
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo,
  PaperPlaneTilt,
  CheckCircle,
  User,
  ChatText
} from '@phosphor-icons/react'

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simular envio
    setEnviado(true)
    setTimeout(() => setEnviado(false), 5000)
    setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
  }

  const contatos = [
    {
      icon: Phone,
      titulo: 'Telefone',
      info: '(62) 3281-3177',
      detalhe: 'Segunda a Sexta, 8h às 18h',
      link: 'tel:6232813177',
      cor: 'from-blue-500 to-blue-700'
    },
    {
      icon: WhatsappLogo,
      titulo: 'WhatsApp',
      info: '(62) 99999-9999',
      detalhe: 'Atendimento rápido',
      link: 'https://wa.me/5562999999999',
      cor: 'from-green-500 to-green-700'
    },
    {
      icon: Envelope,
      titulo: 'E-mail',
      info: 'contato@assego.com.br',
      detalhe: 'Resposta em até 24h',
      link: 'mailto:contato@assego.com.br',
      cor: 'from-red-500 to-red-700'
    },
    {
      icon: Clock,
      titulo: 'Plantão Jurídico',
      info: '(62) 99999-9999',
      detalhe: '24 horas',
      link: 'tel:5562999999999',
      cor: 'from-gold-500 to-gold-700'
    },
  ]

  const redesSociais = [
    { icon: InstagramLogo, label: 'Instagram', href: 'https://instagram.com/assego', cor: 'hover:text-pink-500' },
    { icon: FacebookLogo, label: 'Facebook', href: 'https://facebook.com/assego', cor: 'hover:text-blue-500' },
    { icon: YoutubeLogo, label: 'YouTube', href: 'https://youtube.com/@assegooficial1707', cor: 'hover:text-red-500' },
    { icon: WhatsappLogo, label: 'WhatsApp', href: 'https://wa.me/5562999999999', cor: 'hover:text-green-500' },
  ]

  return (
    <main className="bg-[#050A18] min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000e72]/30 to-[#050A18]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-5 py-2 mb-6">
              <ChatText size={18} className="text-gold-400" />
              <span className="text-sm text-gold-400 font-medium">Fale Conosco</span>
            </div>
            
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Entre em <span className="text-gold-400">Contato</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl">
              Estamos à disposição para atender você. Escolha o canal de sua preferência 
              ou preencha o formulário abaixo.
            </p>
          </div>
        </div>
      </section>

      {/* Cards de Contato */}
      <section className="py-12 bg-[#0B1221]">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contatos.map((contato, index) => (
              <a 
                key={index}
                href={contato.link}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contato.cor} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <contato.icon size={28} weight="duotone" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{contato.titulo}</h3>
                <p className="text-gold-400 font-medium mb-1">{contato.info}</p>
                <p className="text-gray-400 text-sm">{contato.detalhe}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário e Mapa */}
      <section className="py-20 bg-[#050A18]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Formulário */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                Envie sua Mensagem
              </h2>

              {enviado && (
                <div className="mb-6 bg-green-500/20 border border-green-500/30 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle size={24} weight="fill" className="text-green-500" />
                  <span className="text-green-400">Mensagem enviada com sucesso! Retornaremos em breve.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Nome completo</label>
                    <div className="relative">
                      <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Telefone</label>
                    <div className="relative">
                      <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-colors"
                        placeholder="(62) 99999-9999"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">E-mail</label>
                  <div className="relative">
                    <Envelope size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Assunto</label>
                  <select
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-gold-500/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0B1221]">Selecione o assunto</option>
                    <option value="associacao" className="bg-[#0B1221]">Quero me associar</option>
                    <option value="juridico" className="bg-[#0B1221]">Assessoria Jurídica</option>
                    <option value="beneficios" className="bg-[#0B1221]">Dúvidas sobre Benefícios</option>
                    <option value="clube" className="bg-[#0B1221]">Reservas no Clube</option>
                    <option value="eventos" className="bg-[#0B1221]">Espaço para Eventos</option>
                    <option value="outro" className="bg-[#0B1221]">Outro assunto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Mensagem</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-colors resize-none"
                    placeholder="Digite sua mensagem..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold py-4 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <PaperPlaneTilt size={20} weight="bold" />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Mapa e Endereço */}
            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-display font-bold text-white mb-6">
                  Nossa Localização
                </h2>

                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8661417699396!2d-49.25736368513072!3d-16.686928988251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef11c9def5555%3A0x7780aa8f5b9b3b5c!2sR.%2087%2C%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '250px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-[50%] hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Sede Administrativa</h3>
                    <p className="text-gray-400">Rua 87, Qd. F-23, Lt. 01</p>
                    <p className="text-gray-400">Setor Sul - Goiânia/GO</p>
                    <p className="text-gray-400">CEP: 74083-330</p>
                  </div>
                </div>
              </div>

              {/* Horário de Funcionamento */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-display font-bold text-white mb-6">
                  Horário de Funcionamento
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Segunda a Sexta</span>
                    <span className="text-white font-bold">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">Sábado</span>
                    <span className="text-white font-bold">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-300">Plantão Jurídico</span>
                    <span className="text-green-400 font-bold">24 horas</span>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h2 className="text-2xl font-display font-bold text-white mb-6">
                  Redes Sociais
                </h2>

                <div className="flex gap-4">
                  {redesSociais.map((rede, index) => (
                    <a
                      key={index}
                      href={rede.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 ${rede.cor} transition-all hover:scale-110`}
                    >
                      <rede.icon size={28} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Contato