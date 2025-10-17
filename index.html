import { useEffect, useMemo, useState } from "react"

type EventType = "fiesta" | "15-años" | "casamiento" | "taller"

type Booking = {
  id: string
  date: string // YYYY-MM-DD
  timeSlot: "mañana" | "tarde" | "noche"
  eventType: EventType
  addons: string[]
  price: number
  name?: string
  email?: string
  phone?: string
  notes?: string
}

type Addon = {
  id: string
  name: string
  price: number
  category: string
}

const BASE_PRICES: Record<EventType, number> = {
  fiesta: 18000,
  "15-años": 26000,
  casamiento: 35000,
  taller: 14000,
}

const TIME_MULTIPLIERS: Record<"mañana" | "tarde" | "noche", number> = {
  mañana: 1,
  tarde: 1.15,
  noche: 1.3,
}

const ADDONS: Addon[] = [
  // Instalaciones
  { id: "ins-sillas", name: "Sillas x30", price: 3000, category: "Instalaciones" },
  { id: "ins-mesas", name: "Mesas x6", price: 3500, category: "Instalaciones" },
  { id: "ins-repisas", name: "Repisas decorativas", price: 1500, category: "Instalaciones" },
  { id: "ins-sillones", name: "Sillones x4", price: 2000, category: "Instalaciones" },
  { id: "ins-living", name: "Set living (sofá + mesa)", price: 4500, category: "Instalaciones" },

  // Decoración
  { id: "dec-globos", name: "Globos (set)", price: 2200, category: "Decoración" },
  { id: "dec-cortinas", name: "Cortinas drapeadas", price: 3800, category: "Decoración" },
  { id: "dec-manteles", name: "Manteles x10", price: 2800, category: "Decoración" },
  { id: "dec-caminos", name: "Caminos de mesa x8", price: 2400, category: "Decoración" },
  { id: "dec-centros", name: "Centros de mesa x8", price: 3200, category: "Decoración" },

  // Audiovisuales
  { id: "av-video", name: "Cobertura en video", price: 6000, category: "Audiovisuales" },
  { id: "av-foto", name: "Sesión fotográfica", price: 5000, category: "Audiovisuales" },
  { id: "av-firmas", name: "Cuaderno de firmas", price: 1800, category: "Audiovisuales" },
  { id: "av-musica", name: "Música/Amplificación", price: 7000, category: "Audiovisuales" },

  // Gastronomía
  { id: "gas-recepcion", name: "Recepción (finger food)", price: 12000, category: "Gastronomía" },
  { id: "gas-entrada", name: "Entrada", price: 8000, category: "Gastronomía" },
  { id: "gas-principal", name: "Plato principal", price: 15000, category: "Gastronomía" },
  { id: "gas-dulces", name: "Mesa dulce", price: 9000, category: "Gastronomía" },
  { id: "gas-candy", name: "Candy bar", price: 7000, category: "Gastronomía" },

  // Barra de bebidas
  { id: "bar-tragos", name: "Tragos con alcohol", price: 10000, category: "Barra" },
  { id: "bar-mocktails", name: "Coctelería sin alcohol", price: 7000, category: "Barra" },
  { id: "bar-premium", name: "Barra premium", price: 14000, category: "Barra" },
]

function formatARS(n: number) {
  return n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 })
}

function getMonthMatrix(year: number, month: number) {
  const first = new Date(year, month, 1)
  const last = new Date(year, month + 1, 0)
  const daysInMonth = last.getDate()
  const startDay = first.getDay() // 0=Dom
  const weeks: (Date | null)[][] = []
  let current: Date | null = null

  for (let i = 0; i < startDay; i++) {
    if (!current) current = new Date(year, month, 1 - (startDay - i))
    if (!weeks[0]) weeks[0] = []
    weeks[0].push(new Date(current))
    current = new Date(current.getTime() + 24 * 3600 * 1000)
  }
  current = new Date(year, month, 1)
  let weekIndex = weeks.length - 1
  if (weeks[weekIndex]?.length === 0) weeks.pop()

  for (let d = 1; d <= daysInMonth; d++) {
    if (!weeks[weekIndex]) weeks[weekIndex] = []
    weeks[weekIndex].push(new Date(year, month, d))
    if (weeks[weekIndex].length === 7) weekIndex++
  }

  // completar última semana
  while (weeks[weekIndex]?.length < 7) {
    const lastDate = weeks[weekIndex][weeks[weekIndex].length - 1]!
    const next = new Date(lastDate.getTime() + 24 * 3600 * 1000)
    weeks[weekIndex].push(next)
  }

  return weeks
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<"home" | "reservas" | "servicios" | "galeria" | "contacto">("home")
  const [today, setToday] = useState(new Date())
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth()) // 0-11

  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [timeSlot, setTimeSlot] = useState<"mañana" | "tarde" | "noche">("mañana")
  const [eventType, setEventType] = useState<EventType>("fiesta")
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])

  const [reservas, setReservas] = useState<Booking[]>([])
  const [modalOpen, setModalOpen] = useState(false)

  // Load/save bookings from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("bookings")
      if (raw) setReservas(JSON.parse(raw))
    } catch {}
  }, [])
  useEffect(() => {
    try {
      localStorage.setItem("bookings", JSON.stringify(reservas))
    } catch {}
  }, [reservas])

  const basePrice = BASE_PRICES[eventType]
  const multiplier = TIME_MULTIPLIERS[timeSlot]
  const addonsTotal = useMemo(
    () => ADDONS.filter(a => selectedAddons.includes(a.id)).reduce((s, a) => s + a.price, 0),
    [selectedAddons]
  )
  const totalPrice = Math.round(basePrice * multiplier + addonsTotal)

  const reservedKeys = useMemo(() => {
    const set = new Set<string>()
    reservas.forEach(b => set.add(`${b.date}-${b.timeSlot}`))
    return set
  }, [reservas])

  const weeks = useMemo(() => getMonthMatrix(year, month), [year, month])
  const monthName = new Date(year, month, 1).toLocaleDateString("es-AR", { month: "long", year: "numeric" })

  function changeMonth(delta: number) {
    let m = month + delta
    let y = year
    if (m < 0) {
      m = 11
      y -= 1
    }
    if (m > 11) {
      m = 0
      y += 1
    }
    setMonth(m)
    setYear(y)
  }

  function toggleAddon(id: string) {
    setSelectedAddons(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]))
  }

  function isReserved(date: Date, slot: "mañana" | "tarde" | "noche") {
    const key = date.toISOString().slice(0, 10)
    return reservedKeys.has(`${key}-${slot}`)
  }

  function isPast(date: Date) {
    const todayKey = new Date().toISOString().slice(0, 10)
    return date.toISOString().slice(0, 10) < todayKey
  }

  function resetForm() {
    setSelectedDate(null)
    setTimeSlot("mañana")
    setEventType("fiesta")
    setSelectedAddons([])
  }

  function handleReserve(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!selectedDate) return
    const id = Math.random().toString(36).slice(2)
    const form = new FormData(e.currentTarget)
    const booking: Booking = {
      id,
      date: selectedDate,
      timeSlot,
      eventType,
      addons: selectedAddons,
      price: totalPrice,
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      notes: String(form.get("notes") || ""),
    }
    setReservas(prev => [...prev, booking])
    resetForm()
    setModalOpen(true)
  }

  const sections = [
    { key: "home", label: "Inicio" },
    { key: "reservas", label: "Reservas" },
    { key: "servicios", label: "Servicios" },
    { key: "galeria", label: "Galería" },
    { key: "contacto", label: "Contacto" },
  ] as const

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />
            <div>
              <div className="text-lg font-bold">Salón Multiusos</div>
              <div className="text-xs text-gray-500">Amplio, versátil y con todo incluido</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            {sections.map(s => (
              <button
                key={s.key}
                onClick={() => setActiveSection(s.key)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === s.key ? "bg-violet-100 text-violet-800" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>
          <div className="flex md:hidden items-center gap-2">
            {sections.map(s => (
              <button
                key={s.key}
                onClick={() => setActiveSection(s.key)}
                className={`px-2 py-1 rounded-md text-xs font-medium ${
                  activeSection === s.key ? "bg-violet-100 text-violet-800" : "text-gray-600"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Home */}
      {activeSection === "home" && (
        <main>
          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-rose-50" />
            <div className="relative max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center gap-6">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                  Tu evento, nuestro espacio.
                  <span className="block text-violet-700">Reserva por turnos de 3 horas.</span>
                </h1>
                <p className="text-gray-600">
                  Salón amplio ideal para fiestas, 15 años, casamientos, talleres deportivos, artísticos, 
                  danzas, cocina y más. Elige los add-ons que necesitás y calcula tu presupuesto al instante.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveSection("reservas")}
                    className="px-5 py-3 rounded-xl bg-violet-600 text-white font-semibold shadow-lg shadow-violet-200 hover:bg-violet-700"
                  >
                    Reservar ahora
                  </button>
                  <button
                    onClick={() => setActiveSection("servicios")}
                    className="px-5 py-3 rounded-xl border border-violet-300 text-violet-700 font-semibold hover:bg-violet-50"
                  >
                    Ver servicios y precios
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="text-sm text-gray-500">Ubicación</div>
                    <div className="font-semibold">Zona Norte, fácil acceso</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="text-sm text-gray-500">Capacidad</div>
                    <div className="font-semibold">hasta 120 personas</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="text-sm text-gray-500">Turnos</div>
                    <div className="font-semibold">3 horas c/u</div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="text-sm text-gray-500">Equipamiento</div>
                    <div className="font-semibold">Audio, luces, cocina</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="aspect-[4/3] rounded-xl bg-gradient-to-br from-fuchsia-200 to-violet-200" />
                  ))}
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white border border-gray-200 rounded-xl p-4 shadow-lg">
                  <div className="text-sm text-gray-500">Última reserva</div>
                  <div className="font-bold">Casamiento - Noche</div>
                </div>
              </div>
            </div>
          </section>

          {/* Servicios destacados */}
          <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Servicios destacados</h2>
              <button onClick={() => setActiveSection("servicios")} className="text-violet-700 font-semibold hover:underline">
                Ver todos
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Instalaciones", items: "Sillas, mesas, repisas, sillones, living" },
                { title: "Decoración", items: "Globos, cortinas, manteles, caminos, centros" },
                { title: "Audiovisuales", items: "Videos, fotos, libro de firmas, música" },
                { title: "Gastronomía", items: "Recepción, entrada, principal, dulces, candy bar" },
                { title: "Barra", items: "Tragos, cócteles, barra premium" },
                { title: "Eventos", items: "Fiestas, 15 años, casamientos, talleres" },
              ].map((s, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl hover:shadow-sm transition-shadow">
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-sm text-gray-600">{s.items}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-2xl font-bold">¿Listo para planificar tu evento?</div>
                <div className="text-white/90">Consultá disponibilidad y armá tu presupuesto en minutos.</div>
              </div>
              <button
                onClick={() => setActiveSection("reservas")}
                className="px-6 py-3 rounded-xl bg-white text-violet-700 font-semibold hover:bg-violet-50"
              >
                Comenzar reserva
              </button>
            </div>
          </section>
        </main>
      )}

      {/* Reservas */}
      {activeSection === "reservas" && (
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Calendario */}
            <div className="lg:col-span-2 border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <button onClick={() => changeMonth(-1)} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Mes anterior">
                  ‹
                </button>
                <div className="font-semibold capitalize">{monthName}</div>
                <button onClick={() => changeMonth(1)} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Mes siguiente">
                  ›
                </button>
              </div>
              <div className="grid grid-cols-7 text-xs text-gray-500 mb-2">
                {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map(d => (
                  <div key={d} className="text-center py-1">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {weeks.flat().map((date, idx) => {
                  if (!date) return <div key={idx} />
                  const key = date.toISOString().slice(0, 10)
                  const isSelected = selectedDate === key
                  const reserved = isReserved(date, timeSlot)
                  const past = isPast(date)
                  return (
                    <button
                      key={key}
                      disabled={past || reserved}
                      onClick={() => setSelectedDate(key)}
                      className={`h-10 rounded-lg text-sm font-medium ${
                        isSelected ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      } ${
                        reserved ? "bg-red-100 text-red-700 cursor-not-allowed line-through" : ""
                      } ${
                        past ? "bg-gray-50 text-gray-400 cursor-not-allowed" : ""
                      }`}
                      title={reserved ? "No disponible" : past ? "Fecha pasada" : "Disponible"}
                    >
                      {date.getDate()}
                    </button>
                  )
                })}
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1"><span className="w-3 h-3 bg-violet-600 inline-block rounded" /> Seleccionado</div>
                <div className="flex items-center gap-1"><span className="w-3 h-3 bg-red-100 inline-block rounded" /> No disponible</div>
                <div className="flex items-center gap-1"><span className="w-3 h-3 bg-gray-100 inline-block rounded" /> Disponible</div>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-3 border border-gray-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Armá tu reserva</h3>
                <div className="text-sm text-gray-500">Turno de 3 horas</div>
              </div>

              <form className="space-y-5" onSubmit={handleReserve}>
                {/* Fecha y turno */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
                    <input
                      type="date"
                      value={selectedDate ?? ""}
                      onChange={(e) => setSelectedDate(e.target.value || null)}
                      min={new Date().toISOString().slice(0, 10)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Turno</label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                      <option value="mañana">Mañana (8:00 - 11:00)</option>
                      <option value="tarde">Tarde (13:00 - 16:00)</option>
                      <option value="noche">Noche (18:00 - 21:00)</option>
                    </select>
                  </div>
                </div>

                {/* Tipo de evento y precio base */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de evento</label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value as EventType)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                    >
                      <option value="fiesta">Fiesta / Cumpleaños</option>
                      <option value="15-años">15 años</option>
                      <option value="casamiento">Casamiento</option>
                      <option value="taller">Taller / Curso</option>
                    </select>
                  </div>
                  <div className="bg-violet-50 border border-violet-100 rounded-xl p-4">
                    <div className="text-sm text-violet-700">Precio base del turno</div>
                    <div className="text-2xl font-extrabold text-violet-800">{formatARS(basePrice)}</div>
                    <div className="text-xs text-violet-700/80">Multiplicador por turno: {multiplier}x</div>
                  </div>
                </div>

                {/* Add-ons */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">Adicionales</label>
                    <button
                      type="button"
                      onClick={() => setSelectedAddons([])}
                      className="text-xs text-gray-500 hover:underline"
                    >
                      Limpiar
                    </button>
                  </div>
                  <div className="space-y-4">
                    {["Instalaciones", "Decoración", "Audiovisuales", "Gastronomía", "Barra"].map(cat => {
                      const items = ADDONS.filter(a => a.category === cat)
                      return (
                        <div key={cat}>
                          <div className="font-semibold text-gray-800 mb-2">{cat}</div>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {items.map(item => (
                              <label key={item.id} className="flex items-center justify-between gap-3 border border-gray-200 rounded-lg p-3">
                                <div className="flex items-center gap-3">
                                  <input
                                    type="checkbox"
                                    checked={selectedAddons.includes(item.id)}
                                    onChange={() => toggleAddon(item.id)}
                                  />
                                  <span className="text-sm">{item.name}</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-800">{formatARS(item.price)}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Contacto */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input name="name" className="w-full px-3 py-2 rounded-lg border border-gray-300" placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" name="email" className="w-full px-3 py-2 rounded-lg border border-gray-300" placeholder="correo@ejemplo.com" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input name="phone" className="w-full px-3 py-2 rounded-lg border border-gray-300" placeholder="+54 9 ..." required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notas</label>
                    <textarea name="notes" className="w-full px-3 py-2 rounded-lg border border-gray-300" placeholder="Detalles del evento" rows={3} />
                  </div>
                </div>

                {/* Resumen y confirmar */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-600">Adicionales seleccionados:</div>
                    <div className="text-sm font-semibold">{selectedAddons.length}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">Total estimado</div>
                    <div className="text-2xl font-extrabold text-violet-700">{formatARS(totalPrice)}</div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 disabled:opacity-50"
                  disabled={!selectedDate}
                >
                  Confirmar reserva
                </button>
              </form>
            </div>
          </div>
        </main>
      )}

      {/* Servicios */}
      {activeSection === "servicios" && (
        <main className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Servicios y precios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-3">Tipos de eventos</h3>
              <ul className="space-y-2">
                {Object.entries(BASE_PRICES).map(([key, price]) => (
                  <li key={key} className="flex items-center justify-between">
                    <span className="capitalize">{key.replace("-", " ")}</span>
                    <span className="font-semibold">{formatARS(price)}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xs text-gray-500 mt-2">* Precio por turno de 3 horas. Puede variar según horario.</div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-3">Multiplicadores por turno</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>Mañana</span>
                  <span className="font-semibold">1.0x</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Tarde</span>
                  <span className="font-semibold">1.15x</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Noche</span>
                  <span className="font-semibold">1.3x</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold mb-3">Catálogo de adicionales</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {["Instalaciones", "Decoración", "Audiovisuales", "Gastronomía", "Barra"].map(cat => {
                const items = ADDONS.filter(a => a.category === cat)
                return (
                  <div key={cat}>
                    <div className="font-semibold text-gray-800 mb-2">{cat}</div>
                    <div className="space-y-2">
                      {items.map(item => (
                        <div key={item.id} className="flex items-center justify-between text-sm">
                          <span>{item.name}</span>
                          <span className="font-semibold">{formatARS(item.price)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </main>
      )}

      {/* Galería */}
      {activeSection === "galeria" && (
        <main className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Galería</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl bg-gradient-to-br from-rose-200 via-violet-200 to-fuchsia-200" />
            ))}
          </div>
        </main>
      )}

      {/* Contacto */}
      {activeSection === "contacto" && (
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <h2 className="text-2xl font-bold mb-4">Contacto</h2>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert("¡Gracias! Te contactaremos pronto por email o WhatsApp.")
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input className="w-full px-3 py-2 rounded-lg border border-gray-300" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 rounded-lg border border-gray-300" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea className="w-full px-3 py-2 rounded-lg border border-gray-300" rows={4} required />
                </div>
                <button className="px-5 py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700">Enviar</button>
              </form>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="text-xl font-bold mb-3">Redes sociales</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a href="https://wa.me/5491112345678" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-green-50">
                  <div className="w-10 h-10 rounded-lg bg-green-100" />
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-sm text-gray-500">+54 9 11 1234-5678</div>
                  </div>
                </a>
                <a href="https://instagram.com/tu-salon" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-pink-50">
                  <div className="w-10 h-10 rounded-lg bg-pink-100" />
                  <div>
                    <div className="font-semibold">Instagram</div>
                    <div className="text-sm text-gray-500">@tu-salon</div>
                  </div>
                </a>
                <a href="https://facebook.com/tu-salon" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50">
                  <div className="w-10 h-10 rounded-lg bg-blue-100" />
                  <div>
                    <div className="font-semibold">Facebook</div>
                    <div className="text-sm text-gray-500">/tu-salon</div>
                  </div>
                </a>
                <a href="mailto:contacto@tu-salon.com" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                  <div className="w-10 h-10 rounded-lg bg-violet-100" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-gray-500">contacto@tu-salon.com</div>
                  </div>
                </a>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Horario de atención: Lun a Sáb 9:00 - 18:00
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Modal de confirmación */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-[100]">
          <div className="bg-white rounded-2xl border border-gray-200 max-w-md w-full p-6">
            <div className="text-2xl font-bold mb-2">¡Reserva creada!</div>
            <div className="text-gray-600 mb-4">
              Te enviamos la confirmación por email. Nos contactaremos para coordinar los detalles.
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setModalOpen(false)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300"
              >
                Cerrar
              </button>
              <button
                onClick={() => setActiveSection("contacto")}
                className="flex-1 px-4 py-2 rounded-lg bg-violet-600 text-white font-semibold hover:bg-violet-700"
              >
                Contactar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Salón Multiusos. Todos los derechos reservados.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Términos</a>
            <a href="#" className="hover:underline">Privacidad</a>
            <a href="#" className="hover:underline">Ayuda</a>
          </div>
        </div>
      </footer>
    </div>
  )
}