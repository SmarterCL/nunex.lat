# Documentación: Stack Tecnológico NUNEX + SmarterOS

## 1. Visión General: Infraestructura Viva
Esta documentación describe la arquitectura técnica detrás de las operaciones de **NUNEX**, soportadas y ejecutadas por el sistema operativo **SmarterOS**. 

* **NUNEX** provee el músculo financiero y de infraestructura física (Real Estate, Energía, Minería de Bitcoin, Oro).
* **SmarterOS** opera como el sistema nervioso, gestionando la orquestación, identidad (SmarterPersona), ciberseguridad, y flujo de datos a través de IA y contratos programables (SmarterContracts).

Esta estructura está diseñada ex profeso para operar de manera binacional (Chile/Argentina) manteniendo niveles institucionales de Soberanía de Datos y Ciberseguridad.

## 2. El Stack Tecnológico: Componentes Clave

### A. Capa de Identidad y Acceso (SmarterPersona)
La identidad no es un simple login, es un activo criptográfico. Permite a socios y clientes acceder a transacciones multimillonarias con fricción cero y confianza absoluta.

* **Clerk (`apps.smarterbot.cl`):**
  * Proveedor principal de Autenticación como Servicio (AaaS).
  * Maneja el login *passwordless* vía número de celular (OTP) o login biométrico corporativo.
  * Verifica el RUT (Rol Único Tributario) atado a la identidad digital.
* **Componente Físico (NFC - Near Field Communication):**
  * **Hardware:** Lector ACS en terminales físicas (Oficinas NUNEX en Santiago/Mendoza).
  * **Llave Criptográfica:** Celulares o tarjetas inteligentes pre-enroladas.
  * **Flujo:** El UID (Unique Identifier) del chip NFC se captura, se cifra y se vincula permanentemente al ID de Clerk del usuario en la base de datos `SmarterPersona`. El dispositivo se vuelve la firma para aprobar financiamientos o abrir bóvedas de datos.

### B. Capa de Orquestación y Datos Físicos (MCP)
El Protocolo de Contesto de Modelos (Model Context Protocol, MCP) permite que la IA actúe sobre activos del mundo real de manera determinista y auditable.

* **Proveedores de APIs Formales (Boostr / Eikon):**
  * Se conectan vía MCP para validaciones en tiempo real y ejecución de lógica de negocio.
  * **Vertical Identidad & Legal:** Consulta a fuentes gubernamentales/financieras para validación de KYC (Know Your Customer) y AML (Anti-Money Laundering) sobre el RUT digital.
  * **Vertical Real Estate / Catastro:** Consultas directas a Conservadores de Bienes Raíces (CBR) para validar propiedades de gran escala antes del financiamiento.
  * **Vertical Logística / Energía:** Integración con APIs vehiculares y telemetría de Datacenters para monitoreo de activos.

### C. Capa de Workflow y Ciberseguridad (SOC Comercial)
La seguridad es programable, reactiva y automatizada.

* **n8n (Automatización de Flujos de Trabajo):**
  * Actúa como el motor de *SmarterContracts*. 
  * Por ejemplo: El Webhook de "Solicitar Acceso" se gatilla en `nunex.lat`, viaja a n8n, el cual consume las APIs de Boostr para validar el RUT/DNI al instante. Un DNI falso detiene el flujo operativo y levanta una alerta SOC.
* **Supabase / Metabase (Soberanía de Datos Binacional):**
  * **Soberanía Pura:** La división geográfica y criptográfica de los datos es mandatoria.
  * **Santiago (Operativo):** Servidores (ej. AWS/Vercel edge) locales en Chile aseguran latencia mínima para operaciones diarias de `app.smarteros.cl`.
  * **Europa (Identitario):** Cumplimiento estricto con GDPR. Información personal confidencial de la SmarterPersona, portafolios y billeteras se almacenan en zonas de alta privacidad, sin correlacionar a la ligera con los registros operativos de Santiago.
  * **Metabase (Cifrado):** Proveerá a los directores un Dashboard de activos y rendimiento financiero del portafolio, usando vistas SQL directamente de Supabase (con RLS - Row Level Security implementado).

## 3. Ejemplo Práctico: Flujo de Aprobación NFC "SmarterPersona"

1. **Intención:** Un socio director de NUNEX necesita firmar la aprobación de un crédito por $5M USD para la expansión de un Datacenter en Mendoza.
2. **Autenticación Base:** El director ingresa a `app.smarteros.cl` (login vía SMS/WhatsApp operado por Clerk).
3. **Escalamiento Criptográfico:** El sistema requiere una firma de alto nivel para el *SmarterContract*. 
4. **Validación Física:** El director acerca su celular enrolado al Lector ACS en el escritorio de su oficina de Santiago. 
5. **Match en Supabase:** El frontend lee el UID por WebNFC (o a través de un daemon local), lo envía al backend, y comprueba que `UID == clerk_user_id.metadata.trusted_nfc`.
6. **Ejecución (MCP):** El contrato inteligente se dispara en n8n, transfiriendo los fondos y enviando el documento legal notariado al sistema contable.

---

> *"NUNEX es la fuerza; SmarterOS es la inteligencia. Juntos crean vida digital programable y segura."*
