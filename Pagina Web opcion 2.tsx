import React, { useState } from 'react';
import { Calendar, MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, ChevronRight, Clock, Users, Utensils, Music, Sparkles, Wine, Home, Info, BookOpen } from 'lucide-react';

export default function SalonBookingApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedShift, setSelectedShift] = useState('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [eventType, setEventType] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [budget, setBudget] = useState('standard');

  const shifts = [
    { id: '1', time: '09:00 - 12:00', label: 'Mañana' },
    { id: '2', time: '12:00 - 15:00', label: 'Mediodía' },
    { id: '3', time: '15:00 - 18:00', label: 'Tarde' },
    { id: '4', time: '18:00 - 21:00', label: 'Noche' },
    { id: '5', time: '21:00 - 00:00', label: 'Noche Tardía' },
  ];

  const budgets = {
    basic: { name: 'Básico', price: '$150', color: 'bg-blue-100 border-blue-300' },
    standard: { name: 'Estándar', price: '$250', color: 'bg-green-100 border-green-300' },
    premium: { name: 'Premium', price: '$400', color: 'bg-purple-100 border-purple-300' },
    luxury: { name: 'Lujo', price: '$600', color: 'bg-yellow-100 border-yellow-300' },
  };

  const eventTypes = [
    { id: 'workshop', name: 'Taller/Clase', icon: '📚' },
    { id: 'birthday', name: 'Cumpleaños', icon: '🎂' },
    { id: 'anniversary', name: 'Aniversario', icon: '💑' },
    { id: 'quinceañera', name: '15 Años', icon: '👗' },
    { id: 'wedding', name: 'Casamiento', icon: '💒' },
    { id: 'party', name: 'Fiesta', icon: '🎉' },
  ];

  const addons = [
    {
      category: 'Instalaciones',
      icon: '🪑',
      items: ['Sillas', 'Mesas', 'Repisas', 'Sillones', 'Living']
    },
    {
      category: 'Decoración',
      icon: '🎈',
      items: ['Globos', 'Cortinas', 'Manteles', 'Caminos', 'Centros de Mesa']
    },
    {
      category: 'Audiovisuales',
      icon: '📹',
      items: ['Videos', 'Fotografías', 'Cuadernos de Firmas', 'Música']
    },
    {
      category: 'Gastronomía',
      icon: '🍽️',
      items: ['Recepción', 'Entrada', 'Plato Principal', 'Mesas Dulces', 'Candy Bar']
    },
    {
      category: 'Barra de Bebidas',
      icon: '🍹',
      items: ['Tragos con Alcohol', 'Tragos sin Alcohol', 'Coctelería', 'Bebidas Variadas']
    },
  ];

  const toggleAddon = (addon: string) => {
    setSelectedAddons(prev =>
      prev.includes(addon) ? prev.filter(a => a !== addon) : [...prev, addon]
    );
  };

  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedShift || !eventType) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }
    alert(`¡Reserva solicitada!\nFecha: ${selectedDate}\nTurno: ${selectedShift}\nTipo de evento: ${eventType}\nPresupuesto: ${budgets[budget as keyof typeof budgets].name}\nAdicionales: ${selectedAddons.length > 0 ? selectedAddons.join(', ') : 'Ninguno'}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-2xl font-bold text-purple-600">Salón Multiusos</h1>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${currentPage === 'home' ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Home className="w-5 h-5 inline mr-2" />
              Inicio
            </button>
            <button
              onClick={() => setCurrentPage('booking')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${currentPage === 'booking' ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Calendar className="w-5 h-5 inline mr-2" />
              Reservar
            </button>
            <button
              onClick={() => setCurrentPage('info')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${currentPage === 'info' ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Info className="w-5 h-5 inline mr-2" />
              Info
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={`px-4 py-2 rounded-lg font-semibold transition ${currentPage === 'contact' ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Contacto
            </button>
          </div>
        </div>
      </nav>

      {/* Home Page */}
      {currentPage === 'home' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white mb-12 shadow-xl">
            <h2 className="text-5xl font-bold mb-4">Bienvenido a Nuestro Salón Multiusos</h2>
            <p className="text-xl mb-8">El espacio perfecto para tus eventos, clases y celebraciones</p>
            <button
              onClick={() => setCurrentPage('booking')}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition flex items-center gap-2"
            >
              Reservar Ahora <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Clases y Talleres</h3>
              <p className="text-gray-600">Deportes, artes, danzas, cocina y más. Espacios amplios y equipados.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <Sparkles className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Eventos Especiales</h3>
              <p className="text-gray-600">Cumpleaños, bodas, 15 años, aniversarios y más celebraciones.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <Clock className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Turnos de 3 Horas</h3>
              <p className="text-gray-600">Flexibilidad de horarios desde mañana hasta noche tardía.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <Utensils className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Servicios Gastronómicos</h3>
              <p className="text-gray-600">Recepción, entradas, platos principales y mesas dulces.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <Music className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Audiovisuales</h3>
              <p className="text-gray-600">Fotografía, video, música y cuadernos de firmas.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <Wine className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Barra de Bebidas</h3>
              <p className="text-gray-600">Tragos con y sin alcohol, coctelería profesional.</p>
            </div>
          </div>

          {/* Pricing Preview */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Planes de Presupuesto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(budgets).map(([key, budget]) => (
                <div key={key} className={`rounded-xl p-6 border-2 ${budget.color} shadow-lg`}>
                  <h4 className="text-xl font-bold mb-2">{budget.name}</h4>
                  <p className="text-3xl font-bold text-gray-800 mb-4">{budget.price}</p>
                  <p className="text-sm text-gray-600">Por turno de 3 horas</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Booking Page */}
      {currentPage === 'booking' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Realizar Reserva</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Event Type Selection */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Tipo de Evento</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {eventTypes.map(type => (
                    <button
                      key={type.id}
                      onClick={() => setEventType(type.id)}
                      className={`p-4 rounded-lg border-2 transition font-semibold ${
                        eventType === type.id
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="text-3xl mb-2">{type.icon}</div>
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Selecciona una Fecha</h3>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                />
              </div>

              {/* Shift Selection */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Turno (3 horas)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {shifts.map(shift => (
                    <button
                      key={shift.id}
                      onClick={() => setSelectedShift(shift.id)}
                      className={`p-4 rounded-lg border-2 transition font-semibold text-left ${
                        selectedShift === shift.id
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="font-bold">{shift.label}</div>
                      <div className="text-sm text-gray-600">{shift.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Selection */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Presupuesto Base</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(budgets).map(([key, b]) => (
                    <button
                      key={key}
                      onClick={() => setBudget(key)}
                      className={`p-4 rounded-lg border-2 transition font-semibold ${
                        budget === key
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="font-bold">{b.name}</div>
                      <div className="text-lg text-purple-600">{b.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Cantidad de Personas</h3>
                <input
                  type="number"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  placeholder="Ingresa cantidad de personas"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                />
              </div>

              {/* Addons Selection */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Adicionales</h3>
                <div className="space-y-6">
                  {addons.map(addon => (
                    <div key={addon.category}>
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <span className="text-2xl">{addon.icon}</span>
                        {addon.category}
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {addon.items.map(item => (
                          <button
                            key={item}
                            onClick={() => toggleAddon(item)}
                            className={`p-3 rounded-lg border-2 transition font-semibold text-sm ${
                              selectedAddons.includes(item)
                                ? 'border-purple-600 bg-purple-50'
                                : 'border-gray-200 hover:border-purple-300'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-8 shadow-lg sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Resumen</h3>
                <div className="space-y-4 mb-6 pb-6 border-b-2">
                  <div>
                    <p className="text-gray-600 text-sm">Tipo de Evento</p>
                    <p className="font-bold">{eventType || 'No seleccionado'}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Fecha</p>
                    <p className="font-bold">{selectedDate || 'No seleccionada'}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Turno</p>
                    <p className="font-bold">
                      {shifts.find(s => s.id === selectedShift)?.label || 'No seleccionado'}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Presupuesto</p>
                    <p className="font-bold text-purple-600">
                      {budgets[budget as keyof typeof budgets].price}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Personas</p>
                    <p className="font-bold">{guestCount || '0'}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600 text-sm mb-2">Adicionales Seleccionados</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedAddons.length > 0 ? (
                      selectedAddons.map(addon => (
                        <span key={addon} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">
                          {addon}
                        </span>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">Ninguno</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleBooking}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition"
                >
                  Solicitar Reserva
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Info Page */}
      {currentPage === 'info' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Información del Salón</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Características del Espacio</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Espacio amplio y versátil de 500 m²</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Pisos de madera y espejos para clases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Aire acondicionado y calefacción</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Estacionamiento disponible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Cocina equipada para servicios gastronómicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Baños modernos y accesibles</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Horarios de Disponibilidad</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Lunes a Viernes:</span>
                  <span>09:00 - 00:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sábados:</span>
                  <span>09:00 - 02:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Domingos:</span>
                  <span>09:00 - 00:00</span>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <p className="text-sm text-gray-700">
                    <strong>Nota:</strong> Los turnos son de 3 horas. Consulta disponibilidad para fechas especiales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">Servicios Incluidos por Presupuesto</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 px-4 font-bold">Servicio</th>
                    <th className="text-center py-3 px-4 font-bold">Básico</th>
                    <th className="text-center py-3 px-4 font-bold">Estándar</th>
                    <th className="text-center py-3 px-4 font-bold">Premium</th>
                    <th className="text-center py-3 px-4 font-bold">Lujo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Uso del Salón</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Instalaciones Básicas</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Decoración</td>
                    <td className="text-center">-</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Audiovisuales</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">✓</td>
                    <td className="text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Gastronomía</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">-</td>
                    <td className="text-center">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-8 border-2 border-purple-300">
            <h3 className="text-2xl font-bold mb-4">Política de Cancelación</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Cancelación con 30 días de anticipación: 100% reembolso</li>
              <li>• Cancelación con 15-29 días: 50% reembolso</li>
              <li>• Cancelación con menos de 15 días: Sin reembolso</li>
              <li>• Cambios de fecha: Permitidos sin costo adicional</li>
            </ul>
          </div>
        </div>
      )}

      {/* Contact Page */}
      {currentPage === 'contact' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Contacto</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Ubicación</h4>
                      <p className="text-gray-600">Calle Principal 123, Ciudad</p>
                      <p className="text-gray-600">Provincia, País</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Teléfono</h4>
                      <p className="text-gray-600">+54 (11) 1234-5678</p>
                      <p className="text-gray-600">+54 (11) 8765-4321</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-gray-600">info@salonmultiusos.com</p>
                      <p className="text-gray-600">reservas@salonmultiusos.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Síguenos en Redes Sociales</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                    <Facebook className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold">Facebook</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition">
                    <Instagram className="w-6 h-6 text-pink-600" />
                    <span className="font-semibold">Instagram</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                    <span className="font-semibold">WhatsApp</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold">Telegram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="+54 (11) 1234-5678"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Asunto</label>
                  <input
                    type="text"
                    placeholder="Asunto del mensaje"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Mensaje</label>
                  <textarea
                    placeholder="Tu mensaje aquí..."
                    rows={5}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Ubicación</h3>
            <div className="bg-gray-200 rounded-lg w-full h-96 flex items-center justify-center border-2 border-dashed border-gray-400">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-semibold">Mapa interactivo aquí</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2024 Salón Multiusos. Todos los derechos reservados.</p>
          <p className="text-gray-400">Diseñado para hacer tus eventos inolvidables</p>
        </div>
      </footer>
    </div>
  );
}
