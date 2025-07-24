# MBL数字矿山管控塔解决方案
# MBL Digital Mine Control Tower Solution

## 1. 客户业务全景理解 / Customer Business Overview

### 1.1 客户煤炭Hauling业务流程全景图 / Coal Hauling Business Process Panorama
> 此部分将呈现客户煤炭业务的全流程图，从采矿到销售的完整链条，重点突出运输环节。
>
> *This section will present a comprehensive flowchart of the customer's coal business, showing the complete chain from mining to sales, with emphasis on the transportation phase.*

**【图表1：Hauling业务流程图】/ [Figure 1: Hauling Business Process Flowchart]**
> 此图展示从销售订单确认、发运计划制定、资源调度、装载、运输到卸载的完整业务流程链条，标注关键节点、参与角色及信息流转。
>
> *This diagram illustrates the complete business process chain from sales order confirmation, shipment planning, resource scheduling, loading, transportation to unloading, highlighting key nodes, participating roles, and information flow.*

### 1.2 Hauling业务环节的痛点与挑战分析 / Pain Points and Challenges Analysis in Hauling Process
> 此部分将分析客户在煤炭运输环节面临的主要问题，包括效率低下、成本高、实时监控不足、资源调度不合理等痛点。
>
> *This section will analyze the main problems faced by customers in coal transportation, including low efficiency, high costs, insufficient real-time monitoring, and unreasonable resource scheduling.*

### 1.3 客户核心业务场景识别 / Core Business Scenario Identification
> 详细说明五大核心业务场景：Hauling智能调度场景、车队管理场景、料场和驳船协调场景、能源管理场景、车辆智能维护场景，以及每个场景的业务目标和价值。
>
> *Detailed description of five core business scenarios: Hauling intelligent scheduling scenario, fleet management scenario, stockyard and barge coordination scenario, energy management scenario, and vehicle smart maintenance scenario, along with the business objectives and value of each scenario.*

### 1.4 客户业务目标与数字化需求提炼 / Customer Business Objectives and Digital Transformation Requirements
> 基于业务流程和痛点分析，提炼客户的具体业务目标和数字化转型需求。
>
> *Based on business process and pain point analysis, extract the customer's specific business objectives and digital transformation requirements.*

## 2. 解决方案设计思路 / Solution Design Approach

### 2.1 从业务场景到系统的映射 / Mapping from Business Scenarios to System Functions
> 阐述五大核心业务场景(Hauling智能调度、车队管理、料场和驳船协调、能源管理、车辆智能维护)如何映射到智能Hauling系统和设备管理系统的不同功能模块中。
>
> *Explain how the five core business scenarios (Hauling intelligent scheduling, fleet management, stockyard and barge coordination, energy management, vehicle smart maintenance) map to different functional modules in the Intelligent Hauling System and Equipment Management System.*

**【图表2：业务场景-系统功能映射矩阵】/ [Figure 2: Business Scenario-System Function Mapping Matrix]**
> 此矩阵图展示五大业务场景与两大系统各功能模块之间的对应关系，清晰表达每个业务需求由哪些系统功能支持实现。
>
> *This matrix diagram shows the correspondence between the five business scenarios and the functional modules of the two major systems, clearly expressing which system functions support the implementation of each business requirement.*

### 2.2 系统分层架构设计原则 / System Layered Architecture Design Principles
> 说明管控塔分层设计的原则和考虑因素，包括灵活性、可扩展性、易维护性等。
>
> *Explain the principles and considerations of the control tower's layered design, including flexibility, scalability, maintainability, etc.*

### 2.3 管控塔整体框架设计理念 / Control Tower Overall Framework Design Philosophy
> 介绍管控塔整体设计的核心理念，包括数据驱动、智能决策、全局可视等。
>
> *Introduce the core concepts of the control tower's overall design, including data-driven, intelligent decision-making, global visibility, etc.*

**【图表3：数字矿山管控塔分层架构图】/ [Figure 3: Digital Mine Control Tower Layered Architecture Diagram]**
> 此图展示完整的分层架构，从底层设备层、中间的数据层和应用层，到顶层的用户前端层，清晰呈现各层次的组成和层间关系。
>
> *This diagram shows the complete layered architecture, from the bottom device layer, through the middle data and application layers, to the top user frontend layer, clearly presenting the composition of each layer and the relationships between layers.*

## 3. 管控塔架构层级详解 / Control Tower Architecture Layer Details

### 3.1 用户前端层设计（L1-L3层）/ User Frontend Layer Design (L1-L3 Layers)

#### 3.1.1 Dashboard核心KPI设计 / Dashboard Core KPI Design
> 详细说明Dashboard层的设计思路，包括有哪些核心KPI，以及KPI的选择依据、展示方式、交互逻辑等。
>
> *Detail the design approach for the Dashboard layer, including which core KPIs are included, the basis for their selection, display methods, and interaction logic.*

#### 3.1.2 Process View核心KPI设计 / Process View Core KPI Design
> 介绍流程视图的设计，如何按照业务流程阶段组织和展示哪些关键KPI。
>
> *Introduce the design of the process view, how to organize and display key KPIs according to business process stages.*

#### 3.1.3 Resource View核心KPI设计 / Resource View Core KPI Design
> 说明资源视图的设计思路，如何围绕关键资源（卡车、驳船、发电机等）组织数据展示。
>
> *Explain the design approach for the resource view, how to organize data display around key resources (trucks, barges, generators, etc.).*

#### 3.1.4 用户体验与交互逻辑 / User Experience and Interaction Logic
> 阐述用户界面的设计理念、交互逻辑和使用流程。
>
> *Articulate the design philosophy of the user interface, interaction logic, and usage workflow.*

### 3.2 业务中台层设计（KPI计算与数据层）/ Business Middle Platform Layer Design (KPI Calculation and Data Layer)

#### 3.2.1 统一数据集成架构 / Unified Data Integration Architecture
> 详细介绍数据集成架构，包括多源数据采集、清洗、存储方案。
>
> *Provide details on the data integration architecture, including multi-source data collection, cleansing, and storage solutions.*

**【图表4-1：数据流转架构图】/ [Figure 4-1: Data Flow Architecture Diagram]**
> 此图展示数据从采集源（各类设备、系统）到处理、存储、计算、API服务，再到最终呈现的完整流转路径。
>
> *This diagram shows the complete flow path of data from collection sources (various equipment and systems) through processing, storage, computation, and API services to final presentation.*

**【图表4-2：核心数据模型ER图】/ [Figure 4-2: Core Data Model ER Diagram]**
> 此图展示系统核心业务实体（如车辆、任务、路线、司机、设备等）及其关系，阐明数据间的关联结构。
>
> *This diagram shows the core business entities of the system (such as vehicles, tasks, routes, drivers, equipment, etc.) and their relationships, clarifying the associative structure between data.*

#### 3.2.2 数据计算引擎设计 / Data Computation Engine Design
> 说明KPI计算引擎的设计，包括计算模型、算法、实时/离线计算策略等。
>
> *Explain the design of the KPI calculation engine, including computation models, algorithms, real-time/offline calculation strategies, etc.*

#### 3.2.3 API服务体系 / API Service System
> 介绍API服务的设计，包括接口规范、服务治理、安全策略等。
>
> *Introduce the design of API services, including interface specifications, service governance, security policies, etc.*

### 3.3 应用层详细设计 / Application Layer Detailed Design

**【图表5：系统功能模块组成图】/ [Figure 5: System Functional Module Composition Diagram]**
> 此图展示智能Hauling系统和设备管理系统的功能模块构成，以及主要模块间的关系和数据流向。
>
> *This diagram shows the functional module composition of the Intelligent Hauling System and Equipment Management System, as well as the relationships and data flow between major modules.*

#### 3.3.1 智能Hauling系统模块设计 / Intelligent Hauling System Module Design

##### 任务规划模块 / Task Planning Module
> 详细说明任务规划模块的功能和实现方案，包括订单管理、计划编排等。
>
> *Detail the functions and implementation solutions of the task planning module, including order management, schedule planning, etc.*

##### 装载模块 / Loading Module
> 介绍装载模块的设计，包括装载调度、装载监控、质量管理等。
>
> *Introduce the design of the loading module, including loading scheduling, loading monitoring, quality management, etc.*

##### 运输模块 / Transportation Module
> 说明运输模块的设计，包括路线规划（客户Hauling只有一条路线，不存在路线规划）、实时跟踪、异常处理等。
>
> *Explain the design of the transportation module, including route planning (customer Hauling has only one route, so no route planning is needed), real-time tracking, exception handling, etc.*

##### 卸载模块 / Unloading Module
> 介绍卸载模块的设计，包括目的地管理、卸载确认、交付验证等。
>
> *Introduce the design of the unloading module, including destination management, unloading confirmation, delivery verification, etc.*

##### 设备点检管理模块 / Equipment Inspection Management Module
> 管理运输前的设备点检流程，包括点检项目设置、点检记录管理、异常处理流程等，确保设备在运输开始前的安全可靠性。
>
> *Manage the equipment inspection process before transportation, including inspection item setup, inspection record management, exception handling processes, etc., to ensure equipment safety and reliability before transportation begins.*

##### 司机管理模块 / Driver Management Module
> 负责司机信息管理、排班调度、绩效考核、行为分析等功能，提高司机管理效率和驾驶安全性。
>
> *Responsible for driver information management, shift scheduling, performance assessment, behavior analysis, and other functions to improve driver management efficiency and driving safety.*

##### 班次管理模块 / Shift Management Module
> 管理运输班次安排、交接班流程、班次绩效评估、工时统计等，确保运输任务的连续性和稳定性。
>
> *Manage transportation shift arrangements, handover processes, shift performance evaluation, working hours statistics, etc., to ensure the continuity and stability of transportation tasks.*

##### 数据分析与报表模块 / Data Analysis and Reporting Module
> 提供运输效率分析、设备利用率分析、成本分析、趋势预测等功能，支持管理决策和持续改进。
>
> *Provide functions such as transportation efficiency analysis, equipment utilization analysis, cost analysis, trend forecasting, etc., to support management decisions and continuous improvement.*

##### 运输成本管理模块 / Transportation Cost Management Module
> 负责对每次运输任务的成本进行全面记录和分析，包括油电消耗成本、人工成本、维护成本、折旧成本等，为运输效率优化和成本控制提供数据支持。
>
> *Responsible for comprehensive recording and analysis of the cost of each transportation task, including fuel and electricity consumption costs, labor costs, maintenance costs, depreciation costs, etc., providing data support for transportation efficiency optimization and cost control.*

##### 能源补给管理模块 / Energy Replenishment Management Module
> 处理电动车换电和燃油车加油的全流程管理，包括补给计划制定、补给站状态监控、补给记录追踪、能源消耗分析等，确保运输过程中能源供应的连续性和经济性。
>
> *Handle the full-process management of electric vehicle battery swapping and fuel vehicle refueling, including replenishment plan formulation, replenishment station status monitoring, replenishment record tracking, energy consumption analysis, etc., to ensure the continuity and economy of energy supply during transportation.*

#### 3.3.2 设备管理系统详细设计 / Equipment Management System Detailed Design

##### 设备资产台账管理模块 / Equipment Asset Registry Management Module
> 提供全面的设备资产信息管理功能，包括三一电动重卡、换电站、柴油发电机和非三一柴油重卡等所有设备的基础信息登记、分类管理、编码管理、技术参数记录、附件档案管理、设备履历管理、资产价值与折旧管理等，为其他设备管理功能提供基础数据支持。
>
> *Provide comprehensive equipment asset information management functions, including basic information registration, classification management, coding management, technical parameter recording, attachment file management, equipment history management, asset value and depreciation management for all equipment including SANY electric heavy trucks, battery swap stations, diesel generators, and non-SANY diesel heavy trucks, providing basic data support for other equipment management functions.*

##### 数据监控模块 / Data Monitoring Module
> 详细说明数据监控模块的设计，包括监控指标、告警机制、可视化方案等。
>
> *Detail the design of the data monitoring module, including monitoring indicators, alarm mechanisms, visualization solutions, etc.*

##### GPS追踪模块 / GPS Tracking Module
> 介绍GPS追踪模块的设计，包括定位技术、轨迹记录、地理围栏等。
>
> *Introduce the design of the GPS tracking module, including positioning technology, trajectory recording, geofencing, etc.*

##### 基础维护管理模块 / Basic Maintenance Management Module
> 提供设备维护的基础管理功能，包括维护计划制定、日常保养管理、故障维修处理、维修工单流程、维修记录管理、维修人员管理等，确保设备维护工作的规范化和可追溯性。
>
> *Provide basic management functions for equipment maintenance, including maintenance plan formulation, daily maintenance management, fault repair handling, repair work order process, repair record management, maintenance personnel management, etc., to ensure the standardization and traceability of equipment maintenance work.*

##### 智能预测性维护模块 / Intelligent Predictive Maintenance Module
> 基于数据分析和AI算法的高级维护功能，包括设备健康状态评估、故障预测预警、维护优化建议、关键部件寿命预测等，实现从被动维修到主动预防的转变，降低故障率和维护成本。
>
> *Advanced maintenance functions based on data analysis and AI algorithms, including equipment health status assessment, fault prediction and early warning, maintenance optimization recommendations, key component life prediction, etc., to achieve a transition from passive repair to proactive prevention, reducing failure rates and maintenance costs.*

##### 轮胎健康管理 / Tire Health Management
> 介绍轮胎健康管理的设计，包括磨损监测、寿命预测、更换计划等。
>
> *Introduce the design of tire health management, including wear monitoring, life prediction, replacement planning, etc.*

##### 备件管理 / Spare Parts Management
> 详细说明备件管理的设计，包括库存管理、采购计划、使用记录等。
>
> *Detail the design of spare parts management, including inventory management, procurement planning, usage records, etc.*

##### 设备能源监控模块 / Equipment Energy Monitoring Module
> 专注于从设备视角监控能源消耗数据，包括：各类设备(电动重卡/柴油重卡/发电机)的实时能耗状态、单位时间/里程能耗统计、设备能耗历史数据趋势、能耗异常预警等，为设备能源状态评估提供数据支持。
>
> *Focus on monitoring energy consumption data from an equipment perspective, including: real-time energy consumption status of various equipment (electric heavy trucks/diesel heavy trucks/generators), energy consumption statistics per unit time/mileage, historical data trends of equipment energy consumption, abnormal energy consumption warning, etc., providing data support for equipment energy status assessment.*

##### 设备能效评估模块 / Equipment Energy Efficiency Assessment Module
> 基于设备能源消耗数据进行设备能效评估，包括：设备能效等级评定、同类设备能效对比、设备能效随时间变化趋势、影响设备能效的因素分析等，为设备选型和维护决策提供依据。
>
> *Conduct equipment energy efficiency assessment based on equipment energy consumption data, including: equipment energy efficiency rating, energy efficiency comparison of similar equipment, trends in equipment energy efficiency over time, analysis of factors affecting equipment energy efficiency, etc., providing a basis for equipment selection and maintenance decisions.*

##### 能源设施管理模块 / Energy Facility Management Module
> 专门管理换电站、充电桩、加油设施等设备能源补给基础设施，包括设施基础信息管理、设施状态监控、设备配套关系管理、设施维护管理等，确保能源补给设施的正常运行。
>
> *Specially manage energy supply infrastructure such as battery swap stations, charging piles, refueling facilities, etc., including facility basic information management, facility status monitoring, equipment supporting relationship management, facility maintenance management, etc., to ensure the normal operation of energy supply facilities.*

##### 设备报表与分析模块 / Equipment Reporting and Analysis Module
> 提供全面的设备管理报表和数据分析功能，包括设备可用率报表、故障分析报表、维修效率分析、设备TCO(总拥有成本)分析、备件消耗分析、设备寿命周期分析等，为管理决策提供数据支持，同时支持自定义报表和数据导出功能，满足不同层级管理人员的需求。
>
> *Provide comprehensive equipment management reports and data analysis functions, including equipment availability reports, fault analysis reports, repair efficiency analysis, equipment TCO (total cost of ownership) analysis, spare parts consumption analysis, equipment life cycle analysis, etc., providing data support for management decisions, while supporting customized reports and data export functions to meet the needs of management personnel at different levels.*

### 3.4 设备层设计与集成方案 / Device Layer Design and Integration Solution

#### 3.4.1 三一设备数据集成方案 / SANY Equipment Data Integration Solution
> 详细说明三一设备的数据接入方案。
>
> *Detail the data access solution for SANY equipment.*

#### 3.4.2 非三一设备数据集成方案 / Non-SANY Equipment Data Integration Solution
> 介绍非三一设备的集成方案。
>
> *Introduce the integration solution for non-SANY equipment.*

#### 3.4.3 传感器体系设计 / Sensor System Design
> 说明传感器体系的设计，包括传感器选型、采集哪些数据。
>
> *Explain the design of the sensor system, including sensor selection and what data to collect.*

### 3.5 IT系统集成架构 / IT System Integration Architecture

#### 3.5.1 与现有系统的对接设计 / Integration Design with Existing Systems
> 详细介绍与客户现有IT系统的对接设计，包括ERP、WMS、TMS等系统的集成方案。
>
> *Provide details on the integration design with the customer's existing IT systems, including integration solutions for ERP, WMS, TMS, and other systems.*

#### 3.5.2 数据流转与集成规划 / Data Flow and Integration Planning
> 说明系统间的数据流转规划，包括数据同步机制、集成模式、事件处理等。
>
> *Explain the data flow planning between systems, including data synchronization mechanisms, integration modes, event processing, etc.*

## 4. 分步实施路径 / Phased Implementation Path

### 4.1 阶段性实施规划 / Phased Implementation Planning
> 提出分阶段实施的具体计划，包括各阶段的目标、任务、时间节点等。
>
> *Propose a specific plan for phased implementation, including the objectives, tasks, and time nodes of each phase.*

**【图表6：项目实施路线图】/ [Figure 6: Project Implementation Roadmap]**
> 此图以时间线形式展示项目分阶段实施计划，包括各阶段任务内容、时间节点、主要里程碑和交付物。
>
> *This diagram presents the project's phased implementation plan in a timeline format, including the task content, time nodes, major milestones, and deliverables of each phase.*

### 4.2 核心功能优先级与价值释放路径 / Core Functionality Priority and Value Release Path
> 分析各功能模块的优先级，设计价值快速释放的实施路径。
>
> *Analyze the priority of each functional module and design an implementation path for rapid value release.*

### 4.3 系统演进与扩展计划 / System Evolution and Expansion Plan
> 规划系统的长期演进路径，包括功能扩展、性能提升、技术更新等方面。
>
> *Plan the long-term evolution path of the system, including functional expansion, performance improvement, technological updates, etc.*

## 5. 预期价值与成效评估 / Expected Value and Effectiveness Evaluation

### 5.1 关键业务指标改进预期 / Expected Improvement in Key Business Indicators
> 预测实施后对客户关键业务指标的改进效果，如运输效率提升、成本降低等。
>
> *Predict the improvement effects on the customer's key business indicators after implementation, such as increased transportation efficiency, reduced costs, etc.*

### 5.2 成本效益分析 / Cost-Benefit Analysis
> 进行投资回报分析，包括实施成本、运营成本、收益估算等。
>
> *Conduct return on investment analysis, including implementation costs, operating costs, revenue estimates, etc.*

### 5.3 长期业务价值展望 / Long-term Business Value Prospects
> 展望管控塔系统为客户带来的长期业务价值，包括数字化能力提升、持续优化等。
>
> *Look forward to the long-term business value that the control tower system will bring to customers, including enhanced digital capabilities, continuous optimization, etc.*

## 6. 项目实施保障 / Project Implementation Assurance

### 6.1 实施团队与资源规划 / Implementation Team and Resource Planning
> 规划项目实施所需的团队构成、角色分工、资源投入等。
>
> *Plan the team composition, role division, and resource investment needed for project implementation.*

### 6.2 风险管控措施 / Risk Control Measures
> 识别可能的实施风险，并提出相应的管控措施。
>
> *Identify possible implementation risks and propose corresponding control measures.*

### 6.3 客户协作机制 / Customer Collaboration Mechanism
> 设计与客户的协作机制，包括沟通渠道、进度同步、问题处理等。
>
> *Design collaboration mechanisms with customers, including communication channels, progress synchronization, problem handling, etc.* 