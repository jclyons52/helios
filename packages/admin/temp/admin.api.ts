// @public (undocumented)
class Endpoint {
  // WARNING: The type "Url" needs to be exported by the package (e.g. added to index.ts)
  constructor(url: Url, label: string, component: ComponentType<RouteComponentProps<any>>, exact?: boolean, showInSidebar?: boolean);
  // (undocumented)
  component: ComponentType<RouteComponentProps<any>>;
  // (undocumented)
  exact: boolean;
  // (undocumented)
  label: string;
  // (undocumented)
  showInSidebar: boolean;
  // WARNING: The type "Url" needs to be exported by the package (e.g. added to index.ts)
  // (undocumented)
  url: Url;
}

// @public (undocumented)
export function field(fieldType?: FieldType): <T>(target: T, key: keyof T & string) => void;

// @public (undocumented)
enum FieldType {
  // (undocumented)
  bool = "Boolean",
  // (undocumented)
  email = "email",
  // (undocumented)
  entity = "Entity",
  // (undocumented)
  num = "Number",
  // (undocumented)
  str = "String",
  // (undocumented)
  text = "Text",
  // (undocumented)
  userName = "username"
}

// @public (undocumented)
class Kernel {
  // (undocumented)
  boot(): void;
  // (undocumented)
  readonly endpoints: Endpoint[];
}

// @public (undocumented)
export function manyToOne<V extends IHasId>(classRef: Class<V>, formatter?: Formatter): <T>(target: any, key: keyof T & string) => void;

// @public (undocumented)
export function oneToMany<V>(classRef: Class<V>): <T>(target: any, key: keyof T & string) => void;

// @public (undocumented)
export function Resource<T extends IHasId>(config: ModuleParams<T>): (target: Class<T>) => void;

// WARNING: Unsupported export: Layout
// (No @packagedocumentation comment for this package)
