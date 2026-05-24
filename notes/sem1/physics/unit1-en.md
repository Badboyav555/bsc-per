# Thermodynamics – Unit 1  
**Semester 1, BSc Physics**

## 1. Introduction to Thermodynamics

Thermodynamics is the branch of physics that deals with **heat, work, temperature**, and the **statistical behavior** of large systems of particles. It focuses on **macroscopic variables** such as pressure, volume, and temperature, rather than tracking individual molecules.[web:16][web:19]

### 1.1 System, Surroundings, and Boundary

- **System**: The part of the universe under study (e.g., gas in a cylinder).  
- **Surroundings**: Everything outside the system.  
- **Boundary**: The real or imaginary surface separating the system and surroundings.[web:16][web:19]

### 1.2 Types of Thermodynamic Systems

- **Open system**: Can exchange both **mass and energy** with surroundings.  
- **Closed system**: Can exchange **energy (heat and work)** but not mass.  
- **Isolated system**: No exchange of **energy or mass** with surroundings.[web:16][web:19]

---

## 2. Thermodynamic State and Variables

### 2.1 State Variables (State Functions)

State variables are properties that depend only on the **current state** of the system, not on the path taken to reach it. Examples include:

- Pressure \(P\)  
- Volume \(V\)  
- Temperature \(T\)  
- Internal energy \(U\)  
- Entropy \(S\)[web:16][web:19]

Relations between these variables are called **equations of state**. For an ideal gas:

\[
PV = nRT
\]

where  
- \(P\) = pressure,  
- \(V\) = volume,  
- \(n\) = number of moles,  
- \(R\) = universal gas constant,  
- \(T\) = absolute temperature.[web:19]

---

## 3. Zeroth Law of Thermodynamics

> **Zeroth Law**: If two systems are each in **thermal equilibrium** with a third system, then they are in thermal equilibrium with each other.[web:11][web:19]

This law justifies the **definition of temperature** and the use of **thermometers**. Temperature is the property that is equal when two systems are in thermal equilibrium.

---

## 4. First Law of Thermodynamics

> **First Law (Energy Conservation)**: The change in internal energy \( \Delta U \) of a system is equal to the heat added to the system \( Q \) minus the work done by the system \( W \):

\[
\Delta U = Q - W
\]

- If heat is **added** to the system, \( Q > 0 \).  
- If the system **does work** on the surroundings, \( W > 0 \).[web:16][web:19]

### 4.1 Work Done in a Thermodynamic Process

For a gas expanding against constant pressure \(P\):

\[
W = P \Delta V
\]

For a general process (variable pressure), work is given by:

\[
W = \int P \, dV
\]

This is the **area under the P–V curve** on a pressure–volume diagram.[web:16][web:19]

---

## 5. Thermodynamic Processes

### 5.1 Isothermal Process

- Temperature remains **constant** (\( \Delta T = 0 \)).  
- For an ideal gas, \( PV = \text{constant} \).  
- In expansion, heat is **supplied** to keep \( T \) constant.[web:16][web:19]

### 5.2 Adiabatic Process

- **No heat exchange** with surroundings (\( Q = 0 \)).  
- The first law then becomes:

  \[
  \Delta U = -W
  \]

- For an ideal gas, \( PV^\gamma = \text{constant} \), where \( \gamma = C_P/C_V \) is the ratio of specific heats.[web:16][web:19]

### 5.3 Isobaric Process

- Pressure remains **constant** (\( P = \text{constant} \)).  
- Work done: \( W = P \Delta V \).[web:16][web:19]

### 5.4 Isochoric (Isovolumic) Process

- Volume remains **constant** (\( V = \text{constant} \)).  
- Work done \( W = 0 \), so \( \Delta U = Q \).[web:16][web:19]

---

## 6. Heat Capacity and Specific Heat

- **Heat capacity** \( C \) is the amount of heat required to raise the temperature of a body by \( 1 \, \text{K} \):

  \[
  Q = C \, \Delta T
  \]

- **Specific heat** \( c \) is heat capacity per unit mass:

  \[
  Q = m c \, \Delta T
  \]

For gases:

- \( c_P \): specific heat at **constant pressure**  
- \( c_V \): specific heat at **constant volume**  

For an ideal gas: \( c_P > c_V \).[web:16][web:19]

---

## 7. Second Law of Thermodynamics (Introduction)

There are several equivalent statements; the most common are:

- **Kelvin–Planck statement**: It is impossible to construct a heat engine that operates in a cycle and produces no other effect than the absorption of heat from a single reservoir and the performance of an equal amount of work.[web:16][web:19]  
- **Clausius statement**: Heat cannot spontaneously flow from a colder body to a hotter body.[web:16][web:19]

These statements introduce the idea of **irreversible processes** and the **direction of natural processes**.

---

## 8. Heat Engine and Efficiency

A **heat engine** is a device that converts heat into mechanical work by operating in a **cycle**:

- Absorbs heat \( Q_H \) from a **hot reservoir**.  
- Rejects heat \( Q_C \) to a **cold reservoir**.  
- Performs work \( W = Q_H - Q_C \).

The **thermal efficiency** \( \eta \) of a heat engine is:

\[
\eta = \frac{W}{Q_H} = 1 - \frac{Q_C}{Q_H}
\]

For any real engine, \( \eta < 1 \).[web:16][web:19]

---

## 9. Carnot Engine (Ideal Reversible Engine)

A **Carnot engine** operates on a **reversible cycle** consisting of:

1. Isothermal expansion (absorbs heat \( Q_H \) at \( T_H \)).  
2. Adiabatic expansion.  
3. Isothermal compression (rejects heat \( Q_C \) at \( T_C \)).  
4. Adiabatic compression.

The efficiency of a Carnot engine is:

\[
\eta_{\text{Carnot}} = 1 - \frac{T_C}{T_H}
\]

This is the **maximum possible efficiency** for any heat engine working between two temperatures \( T_H \) and \( T_C \).[web:16][web:19]

---

## 10. Summary of Key Points

- Thermodynamics deals with **macroscopic variables** and **energy transfer**.  
- The **zeroth law** defines temperature and thermal equilibrium.  
- The **first law** is energy conservation: \( \Delta U = Q - W \).  
- Important processes: **isothermal, adiabatic, isobaric, isochoric**.  
- The **second law** restricts the direction of heat flow.  
- The **Carnot engine** sets the upper limit for efficiency.

---

\*You can now practice numerical problems on P–V diagrams, specific heat ratios, and Carnot efficiency using the formulas above.[web:16][web:19]
