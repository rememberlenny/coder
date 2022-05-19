// Code generated by 'make coder/scripts/apitypings/main.go'. DO NOT EDIT.

// From codersdk/workspaceagents.go:35:6
export interface AWSInstanceIdentityToken {
  readonly signature: string
  readonly document: string
}

// From codersdk/gitsshkey.go:21:6
export interface AgentGitSSHKey {
  readonly public_key: string
  readonly private_key: string
}

// From codersdk/users.go:151:6
export interface AuthMethods {
  readonly password: boolean
  readonly github: boolean
}

// From codersdk/workspaceagents.go:40:6
export interface AzureInstanceIdentityToken {
  readonly signature: string
  readonly encoding: string
}

// From codersdk/buildinfo.go:10:6
export interface BuildInfoResponse {
  readonly external_url: string
  readonly version: string
}

// From codersdk/users.go:42:6
export interface CreateFirstUserRequest {
  readonly email: string
  readonly username: string
  readonly password: string
  readonly organization: string
}

// From codersdk/users.go:50:6
export interface CreateFirstUserResponse {
  readonly user_id: string
  readonly organization_id: string
}

// From codersdk/users.go:146:6
export interface CreateOrganizationRequest {
  readonly name: string
}

// From codersdk/parameters.go:81:6
export interface CreateParameterRequest {
  readonly name: string
  readonly source_value: string
  readonly source_scheme: ParameterSourceScheme
  readonly destination_scheme: ParameterDestinationScheme
}

// From codersdk/organizations.go:49:6
export interface CreateTemplateRequest {
  readonly name: string
  readonly description?: string
  readonly template_version_id: string
  readonly parameter_values?: CreateParameterRequest[]
}

// From codersdk/organizations.go:36:6
export interface CreateTemplateVersionRequest {
  readonly template_id?: string
  readonly storage_method: ProvisionerStorageMethod
  readonly storage_source: string
  readonly provisioner: ProvisionerType
  readonly parameter_values?: CreateParameterRequest[]
}

// From codersdk/users.go:55:6
export interface CreateUserRequest {
  readonly email: string
  readonly username: string
  readonly password: string
  readonly organization_id: string
}

// From codersdk/workspaces.go:34:6
export interface CreateWorkspaceBuildRequest {
  readonly template_version_id?: string
  readonly transition: WorkspaceTransition
  readonly dry_run?: boolean
  readonly state?: string
}

// From codersdk/organizations.go:67:6
export interface CreateWorkspaceRequest {
  readonly template_id: string
  readonly name: string
  readonly parameter_values?: CreateParameterRequest[]
}

// From codersdk/users.go:142:6
export interface GenerateAPIKeyResponse {
  readonly key: string
}

// From codersdk/gitsshkey.go:14:6
export interface GitSSHKey {
  readonly user_id: string
  readonly created_at: string
  readonly updated_at: string
  readonly public_key: string
}

// From codersdk/workspaceagents.go:31:6
export interface GoogleInstanceIdentityToken {
  readonly json_web_token: string
}

// From codersdk/users.go:131:6
export interface LoginWithPasswordRequest {
  readonly email: string
  readonly password: string
}

// From codersdk/users.go:137:6
export interface LoginWithPasswordResponse {
  readonly session_token: string
}

// From codersdk/organizations.go:28:6
export interface Organization {
  readonly id: string
  readonly name: string
  readonly created_at: string
  readonly updated_at: string
}

// From codersdk/organizationmember.go:9:6
export interface OrganizationMember {
  readonly user_id: string
  readonly organization_id: string
  readonly created_at: string
  readonly updated_at: string
  readonly roles: string[]
}

// From codersdk/pagination.go:11:6
export interface Pagination {
  readonly after_id?: string
  readonly limit?: number
  readonly offset?: number
}

// From codersdk/parameters.go:46:6
export interface Parameter {
  readonly id: string
  readonly created_at: string
  readonly updated_at: string
  readonly scope: ParameterScope
  readonly scope_id: string
  readonly name: string
  readonly source_scheme: ParameterSourceScheme
  readonly destination_scheme: ParameterDestinationScheme
}

// From codersdk/parameters.go:57:6
export interface ParameterSchema {
  readonly id: string
  readonly created_at: string
  readonly job_id: string
  readonly name: string
  readonly description: string
  readonly default_source_scheme: ParameterSourceScheme
  readonly default_source_value: string
  readonly allow_override_source: boolean
  readonly default_destination_scheme: ParameterDestinationScheme
  readonly allow_override_destination: boolean
  readonly default_refresh: string
  readonly redisplay_value: boolean
  readonly validation_error: string
  readonly validation_condition: string
  readonly validation_type_system: string
  readonly validation_value_type: string
  readonly validation_contains: string[]
}

// From codersdk/provisionerdaemons.go:40:6
export interface ProvisionerDaemon {
  readonly id: string
  readonly created_at: string
  readonly updated_at?: string
  readonly organization_id?: string
  readonly name: string
  readonly provisioners: ProvisionerType[]
}

// From codersdk/provisionerdaemons.go:70:6
export interface ProvisionerJob {
  readonly id: string
  readonly created_at: string
  readonly started_at?: string
  readonly completed_at?: string
  readonly error?: string
  readonly status: ProvisionerJobStatus
  readonly worker_id?: string
}

// From codersdk/provisionerdaemons.go:80:6
export interface ProvisionerJobLog {
  readonly id: string
  readonly created_at: string
  readonly log_source: LogSource
  readonly log_level: LogLevel
  readonly stage: string
  readonly output: string
}

// From codersdk/roles.go:12:6
export interface Role {
  readonly name: string
  readonly display_name: string
}

// From codersdk/templates.go:15:6
export interface Template {
  readonly id: string
  readonly created_at: string
  readonly updated_at: string
  readonly organization_id: string
  readonly name: string
  readonly provisioner: ProvisionerType
  readonly active_version_id: string
  readonly workspace_owner_count: number
  readonly description: string
}

// From codersdk/templateversions.go:14:6
export interface TemplateVersion {
  readonly id: string
  readonly template_id?: string
  readonly created_at: string
  readonly updated_at: string
  readonly name: string
  readonly job: ProvisionerJob
  readonly readme: string
}

// From codersdk/templateversions.go:25:6
export interface TemplateVersionParameter {
  readonly id: string
  readonly created_at: string
  readonly updated_at: string
  readonly scope: ParameterScope
  readonly scope_id: string
  readonly name: string
  readonly source_scheme: ParameterSourceScheme
  readonly source_value: string
  readonly destination_scheme: ParameterDestinationScheme
  readonly schema_id: string
  readonly default_source_value: boolean
}

// From codersdk/templates.go:73:6
export interface TemplateVersionsByTemplateRequest extends Pagination {
  readonly template_id: string
}

// From codersdk/templates.go:27:6
export interface UpdateActiveTemplateVersion {
  readonly id: string
}

// From codersdk/users.go:71:6
export interface UpdateRoles {
  readonly roles: string[]
}

// From codersdk/users.go:67:6
export interface UpdateUserPasswordRequest {
  readonly password: string
}

// From codersdk/users.go:62:6
export interface UpdateUserProfileRequest {
  readonly email: string
  readonly username: string
}

// From codersdk/workspaces.go:141:6
export interface UpdateWorkspaceAutostartRequest {
  readonly schedule: string
}

// From codersdk/workspaces.go:161:6
export interface UpdateWorkspaceTTLRequest {
  // This is likely an enum in an external package ("time.Duration")
  readonly ttl?: number
}

// From codersdk/files.go:16:6
export interface UploadResponse {
  readonly hash: string
}

// From codersdk/users.go:32:6
export interface User {
  readonly id: string
  readonly email: string
  readonly created_at: string
  readonly username: string
  readonly status: UserStatus
  readonly organization_ids: string[]
  readonly roles: Role[]
}

// From codersdk/users.go:96:6
export interface UserAuthorization {
  readonly object: UserAuthorizationObject
  readonly action: string
}

// From codersdk/users.go:112:6
export interface UserAuthorizationObject {
  readonly resource_type: string
  readonly owner_id?: string
  readonly organization_id?: string
  readonly resource_id?: string
}

// From codersdk/users.go:85:6
export interface UserAuthorizationRequest {
  readonly checks: Record<string, UserAuthorization>
}

// From codersdk/users.go:80:6
export type UserAuthorizationResponse = Record<string, boolean>

// From codersdk/users.go:75:6
export interface UserRoles {
  readonly roles: string[]
  readonly organization_roles: Record<string, string[]>
}

// From codersdk/users.go:24:6
export interface UsersRequest extends Pagination {
  readonly search?: string
  readonly status?: string
}

// From codersdk/workspaces.go:18:6
export interface Workspace {
  readonly id: string
  readonly created_at: string
  readonly updated_at: string
  readonly owner_id: string
  readonly owner_name: string
  readonly template_id: string
  readonly template_name: string
  readonly latest_build: WorkspaceBuild
  readonly outdated: boolean
  readonly name: string
  readonly autostart_schedule: string
  // This is likely an enum in an external package ("time.Duration")
  readonly ttl?: number
}

// From codersdk/workspaceresources.go:31:6
export interface WorkspaceAgent {
  readonly id: string
  readonly created_at: string
  readonly updated_at: string
  readonly first_connected_at?: string
  readonly last_connected_at?: string
  readonly disconnected_at?: string
  readonly status: WorkspaceAgentStatus
  readonly name: string
  readonly resource_id: string
  readonly instance_id?: string
  readonly architecture: string
  readonly environment_variables: Record<string, string>
  readonly operating_system: string
  readonly startup_script?: string
  readonly directory?: string
}

// From codersdk/workspaceagents.go:47:6
export interface WorkspaceAgentAuthenticateResponse {
  readonly session_token: string
}

// From codersdk/workspaceresources.go:57:6
export interface WorkspaceAgentInstanceMetadata {
  readonly jail_orchestrator: string
  readonly operating_system: string
  readonly platform: string
  readonly platform_family: string
  readonly kernel_version: string
  readonly kernel_architecture: string
  readonly cloud: string
  readonly jail: string
  readonly vnc: boolean
}

// From codersdk/workspaceresources.go:49:6
export interface WorkspaceAgentResourceMetadata {
  readonly memory_total: number
  readonly disk_total: number
  readonly cpu_cores: number
  readonly cpu_model: string
  readonly cpu_mhz: number
}

// From codersdk/workspacebuilds.go:24:6
export interface WorkspaceBuild {
  readonly id: string
  readonly created_at: string
  readonly updated_at: string
  readonly workspace_id: string
  readonly template_version_id: string
  readonly build_number: number
  readonly name: string
  readonly transition: WorkspaceTransition
  readonly initiator_id: string
  readonly job: ProvisionerJob
}

// From codersdk/workspaces.go:64:6
export interface WorkspaceBuildsRequest extends Pagination {
  readonly WorkspaceID: string
}

// From codersdk/workspaces.go:180:6
export interface WorkspaceFilter {
  readonly OrganizationID: string
  readonly Owner: string
}

// From codersdk/workspaceresources.go:21:6
export interface WorkspaceResource {
  readonly id: string
  readonly created_at: string
  readonly job_id: string
  readonly workspace_transition: WorkspaceTransition
  readonly type: string
  readonly name: string
  readonly agents?: WorkspaceAgent[]
}

// From codersdk/provisionerdaemons.go:30:6
export type LogLevel = "debug" | "error" | "info" | "trace" | "warn"

// From codersdk/provisionerdaemons.go:23:6
export type LogSource = "provisioner" | "provisioner_daemon"

// From codersdk/parameters.go:30:6
export type ParameterDestinationScheme = "environment_variable" | "none" | "provisioner_variable"

// From codersdk/parameters.go:14:6
export type ParameterScope = "organization" | "template" | "user" | "workspace"

// From codersdk/parameters.go:23:6
export type ParameterSourceScheme = "data" | "none"

// From codersdk/parameters.go:38:6
export type ParameterTypeSystem = "hcl" | "none"

// From codersdk/provisionerdaemons.go:50:6
export type ProvisionerJobStatus = "canceled" | "canceling" | "failed" | "pending" | "running" | "succeeded"

// From codersdk/organizations.go:14:6
export type ProvisionerStorageMethod = "file"

// From codersdk/organizations.go:20:6
export type ProvisionerType = "echo" | "terraform"

// From codersdk/users.go:17:6
export type UserStatus = "active" | "suspended"

// From codersdk/workspaceresources.go:13:6
export type WorkspaceAgentStatus = "connected" | "connecting" | "disconnected"

// From codersdk/workspacebuilds.go:14:6
export type WorkspaceTransition = "delete" | "start" | "stop"
