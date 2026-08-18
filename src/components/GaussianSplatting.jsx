import { useCallback, useState } from "react";
import {
  ModusWcBadge,
  ModusWcButton,
  ModusWcCard,
  ModusWcDropdownMenu,
  ModusWcIcon,
  ModusWcMenuItem,
  ModusWcTypography,
} from "@trimble-oss/moduswebcomponents-react";
import { splats as initialSplats, toolbarGroups } from "../data/splats";

function closeMenuFromEvent(event) {
  const trigger = event.target?.closest?.("modus-wc-dropdown-menu");
  if (trigger) trigger.menuVisible = false;
}

function ToolbarIconButton({ item, pressed, onSelect }) {
  return (
    <ModusWcButton
      variant="borderless"
      color="tertiary"
      shape="square"
      size="sm"
      pressed={pressed}
      aria-label={item.label}
      onButtonClick={() => onSelect(item.id)}
    >
      {item.type === "modus" ? (
        <ModusWcIcon name={item.icon} size="sm" decorative />
      ) : (
        <span className="gs-asset-icon">
          <img src={item.src} alt="" aria-hidden="true" />
        </span>
      )}
    </ModusWcButton>
  );
}

function SplatRow({ splat, onToggleVisibility, onRowAction }) {
  return (
    <div className="gs-splat-row">
      <div className="gs-splat-row__left">
        <ModusWcIcon name="file" size="sm" decorative />
        <ModusWcTypography
          hierarchy="p"
          size="sm"
          customClass="gs-splat-row__name"
          label={splat.name}
        />
      </div>
      <div className="gs-splat-row__actions">
        <ModusWcButton
          variant="borderless"
          color="tertiary"
          shape="square"
          size="sm"
          pressed={splat.visible}
          aria-label={splat.visible ? "Hide splat" : "Show splat"}
          onButtonClick={() => onToggleVisibility(splat.id)}
        >
          <ModusWcIcon
            name={splat.visible ? "visibility_on" : "visibility_off"}
            size="xs"
            decorative
          />
        </ModusWcButton>
        <ModusWcDropdownMenu
          buttonAriaLabel={`More options for ${splat.name}`}
          buttonVariant="borderless"
          buttonColor="tertiary"
          buttonSize="sm"
          buttonShape="square"
          menuPlacement="bottom-end"
          menuStrategy="fixed"
          menuSize="sm"
        >
          <div slot="button">
            <ModusWcIcon name="more_vertical" size="xs" decorative />
          </div>
          <div slot="menu">
            <ModusWcMenuItem
              label="Rename"
              value="rename"
              onItemSelect={(event) => {
                onRowAction(splat.id, event.detail.value);
                closeMenuFromEvent(event);
              }}
            />
            <ModusWcMenuItem
              label="Duplicate"
              value="duplicate"
              onItemSelect={(event) => {
                onRowAction(splat.id, event.detail.value);
                closeMenuFromEvent(event);
              }}
            />
            <ModusWcMenuItem
              label="Delete"
              value="delete"
              onItemSelect={(event) => {
                onRowAction(splat.id, event.detail.value);
                closeMenuFromEvent(event);
              }}
            />
          </div>
        </ModusWcDropdownMenu>
      </div>
    </div>
  );
}

export default function GaussianSplatting() {
  const [splats, setSplats] = useState(initialSplats);
  const [section, setSection] = useState("files");
  const [panelOpen, setPanelOpen] = useState(true);
  const [activeTool, setActiveTool] = useState("crop");
  const [status, setStatus] = useState("");

  const toggleVisibility = useCallback((id) => {
    setSplats((current) =>
      current.map((splat) =>
        splat.id === id ? { ...splat, visible: !splat.visible } : splat
      )
    );
  }, []);

  const handleAddNew = useCallback((event) => {
    const value = event.detail.value;
    closeMenuFromEvent(event);
    setStatus(
      value === "file" ? "Choose a splat file to add." : "Connect a capture source."
    );
  }, []);

  const handleRowAction = useCallback((id, action) => {
    setStatus(`${action} requested for splat ${id}.`);
  }, []);

  return (
    <div className="gs-page">
      <img
        className="gs-scene"
        src={`${import.meta.env.BASE_URL}gaussian-splatting/sketchup-scene.png`}
        alt="SketchUp viewport with a Gaussian splat of a living room scene"
      />

      <div className="gs-toolbar" role="toolbar" aria-label="Gaussian Splat tools">
        <div className="gs-toolbar__header">
          <ModusWcTypography hierarchy="p" size="xs" weight="semibold" label="Gaussian Splat" />
        </div>
        <div className="gs-toolbar__icons">
          {toolbarGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="gs-toolbar__group">
              {groupIndex > 0 ? <span className="gs-toolbar__divider" aria-hidden="true" /> : null}
              {group.map((item) => (
                <ToolbarIconButton
                  key={item.id}
                  item={item}
                  pressed={activeTool === item.id}
                  onSelect={setActiveTool}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <aside
        className="gs-manager"
        hidden={!panelOpen}
        aria-labelledby="gs-manager-title"
      >
        <header className="gs-manager__titlebar">
          <div className="gs-manager__title-group">
            <span className="gs-manager__logo">
              <img
                src={`${import.meta.env.BASE_URL}gaussian-splatting/icon-splat.svg`}
                alt=""
                aria-hidden="true"
              />
            </span>
            <ModusWcTypography
              hierarchy="p"
              size="xs"
              label="Gaussian Splatting"
            />
          </div>
          <ModusWcButton
            variant="borderless"
            color="tertiary"
            shape="square"
            size="sm"
            aria-label="Close panel"
            onButtonClick={() => setPanelOpen(false)}
          >
            <ModusWcIcon name="close" size="xs" decorative />
          </ModusWcButton>
        </header>

        <div className="gs-manager__body">
          <nav className="gs-sidebar" aria-label="Panel sections">
            {[
              { id: "files", icon: "folder_open", label: "Splats in file" },
              { id: "settings", icon: "settings", label: "Settings" },
              { id: "adjust", icon: "tune", label: "Adjustments" },
            ].map((item) => (
              <ModusWcButton
                key={item.id}
                variant="borderless"
                color="tertiary"
                shape="square"
                size="sm"
                pressed={section === item.id}
                customClass={section === item.id ? "gs-sidebar__item is-active" : "gs-sidebar__item"}
                aria-label={item.label}
                aria-current={section === item.id ? "page" : undefined}
                onButtonClick={() => setSection(item.id)}
              >
                <ModusWcIcon name={item.icon} size="sm" decorative />
              </ModusWcButton>
            ))}
            <div className="gs-sidebar__spacer" />
            <ModusWcButton
              variant="borderless"
              color="tertiary"
              shape="square"
              size="sm"
              customClass="gs-sidebar__item"
              aria-label="Notifications"
            >
              <ModusWcIcon name="notifications" size="sm" decorative />
            </ModusWcButton>
            <ModusWcButton
              variant="borderless"
              color="tertiary"
              shape="square"
              size="sm"
              customClass="gs-sidebar__item"
              aria-label="Help"
            >
              <ModusWcIcon name="help" size="sm" decorative />
            </ModusWcButton>
          </nav>

          <div className="gs-manager__content">
            <div className="gs-manager__header">
              <ModusWcTypography
                id="gs-manager-title"
                hierarchy="h1"
                size="md"
                weight="bold"
                label="Splat Manager"
              />
              <div className="gs-manager__header-actions">
                <ModusWcDropdownMenu
                  buttonAriaLabel="Add new splat"
                  buttonVariant="outlined"
                  buttonColor="primary"
                  buttonSize="sm"
                  menuPlacement="bottom-end"
                  menuStrategy="fixed"
                  menuSize="sm"
                >
                  <div slot="button" className="gs-add-new">
                    Add New
                    <ModusWcIcon name="expand_more" size="xs" decorative />
                  </div>
                  <div slot="menu">
                    <ModusWcMenuItem label="From file" value="file" onItemSelect={handleAddNew} />
                    <ModusWcMenuItem label="From capture" value="capture" onItemSelect={handleAddNew} />
                  </div>
                </ModusWcDropdownMenu>
                <ModusWcButton
                  variant="borderless"
                  color="tertiary"
                  shape="square"
                  size="sm"
                  aria-label="Save"
                  onButtonClick={() => setStatus("Splat list saved.")}
                >
                  <ModusWcIcon name="save_disk" size="sm" decorative />
                </ModusWcButton>
              </div>
            </div>

            <div hidden={section !== "files"}>
              <ModusWcCard bordered padding="comfortable" customClass="gs-list-card">
                <span slot="title">Splats in the file</span>
                <div className="gs-splat-list">
                  {splats.map((splat) => (
                    <SplatRow
                      key={splat.id}
                      splat={splat}
                      onToggleVisibility={toggleVisibility}
                      onRowAction={handleRowAction}
                    />
                  ))}
                </div>
              </ModusWcCard>

              <ModusWcCard
                bordered
                layout="horizontal"
                padding="compact"
                customClass="gs-promo"
              >
                <figure slot="header">
                  <span className="gs-promo__badge-wrap">
                    <ModusWcBadge color="primary" size="sm" variant="filled">
                      New
                    </ModusWcBadge>
                  </span>
                  <img
                    src={`${import.meta.env.BASE_URL}gaussian-splatting/layout-promo.png`}
                    alt=""
                    aria-hidden="true"
                  />
                </figure>
                <span slot="title">Splats in SketchUp Layout</span>
                <span slot="subtitle">
                  Place your captures directly in Layout documents.
                </span>
                <div slot="actions">
                  <ModusWcButton
                    variant="filled"
                    color="primary"
                    size="sm"
                    onButtonClick={() => setStatus("Starting Layout extension install.")}
                  >
                    <ModusWcIcon name="launch" size="xs" decorative />
                    Try Now
                  </ModusWcButton>
                </div>
              </ModusWcCard>
            </div>

            <div hidden={section !== "settings"} aria-hidden={section !== "settings"}>
              <ModusWcCard bordered padding="comfortable">
                <span slot="title">Settings</span>
                <ModusWcTypography
                  hierarchy="p"
                  size="sm"
                  label="Display and import defaults for Gaussian splats in this SketchUp file."
                />
              </ModusWcCard>
            </div>

            <div hidden={section !== "adjust"} aria-hidden={section !== "adjust"}>
              <ModusWcCard bordered padding="comfortable">
                <span slot="title">Adjustments</span>
                <ModusWcTypography
                  hierarchy="p"
                  size="sm"
                  label="Crop, orient, align, scale, and position the selected splat."
                />
              </ModusWcCard>
            </div>

            <div className="gs-status" aria-live="polite">
              {status ? (
                <ModusWcTypography hierarchy="p" size="xs" label={status} />
              ) : null}
            </div>
          </div>
        </div>
      </aside>

      <div className="gs-reopen" hidden={panelOpen}>
        <ModusWcButton
          variant="filled"
          color="primary"
          size="sm"
          onButtonClick={() => setPanelOpen(true)}
        >
          <ModusWcIcon name="window_side_panel" size="xs" decorative />
          Open Splat Manager
        </ModusWcButton>
      </div>
    </div>
  );
}
