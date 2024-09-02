import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import WhatsAppButton from "../Components/wspButon"; // Ajusta la ruta si es necesario
import Hero from "../Components/section";
import Navbar from "../Components/navbar";
import { MemoryRouter } from "react-router-dom";

describe("WhatsAppButton", () => {
  // Simulamos window.open antes de cada prueba
  beforeEach(() => {
    vi.spyOn(window, "open").mockImplementation(() => {});
  });

  // Restauramos la implementación original después de cada prueba
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should call onClick when the button is clicked", () => {
    const handleClick = vi.fn();
    const { getByText } = render(<WhatsAppButton onClick={handleClick} />);
    const button = getByText("Consultanos por WhatsApp");

    fireEvent.click(button);

    // Verificar que la función onClick se haya llamado
    expect(handleClick).toHaveBeenCalled();
  });
});

describe("Titulo", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Hero />);
    expect(getByText("Fierros Motor Detailing")).toBeInTheDocument();
  });
});

describe("Navbar", () => {
  it("renderiza correctamente los elementos", () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Verifica que el título y logo se renderizan
    expect(getByText("Fierros Motor")).toBeInTheDocument();
    expect(getByAltText("logo-auto")).toBeInTheDocument();

    // Verifica que los enlaces están presentes
    expect(getByText("Inicio")).toBeInTheDocument();
    expect(getByText("Servicios")).toBeInTheDocument();
    expect(getByText("Galeria")).toBeInTheDocument();
    expect(getByText("Contacto")).toBeInTheDocument();
  });

  it("abre y cierra el menu desplegable", () => {
    const { getByText, container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    // Verifica que el menú está cerrado inicialmente
    expect(container.querySelector(".container-links")).not.toHaveClass("open");
    // Simula el clic en el botón de menú
    const menuButton = getByText("☰");
    fireEvent.click(menuButton);
    // Verifica que el menú se abre
    expect(container.querySelector(".container-links")).toHaveClass("open");
    // Simula el clic en el botón de menú nuevamente para cerrarlo
    fireEvent.click(menuButton);
    // Verifica que el menú se cierra
    expect(container.querySelector(".container-links")).not.toHaveClass("open");
  });
  it("links estan correctamente definidos", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    // Verifica que los enlaces tienen la URL correcta
    expect(getByText("Inicio").closest("a")).toHaveAttribute("href", "/");
    expect(getByText("Servicios").closest("a")).toHaveAttribute(
      "href",
      "#servicios"
    );
    expect(getByText("Galeria").closest("a")).toHaveAttribute(
      "href",
      "/galery"
    );
    expect(getByText("Contacto").closest("a")).toHaveAttribute(
      "href",
      "#contacto"
    );
  });
});
